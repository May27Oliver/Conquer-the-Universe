<?php
// print_r($_POST);
session_start();
$errMsg = "";
$memNo = $_SESSION["memNo"];
$votQ = $_REQUEST["votQ"];
$votA = $_REQUEST["votA"];
$votB = $_REQUEST["votB"];

try {
	require_once("../connectPDO.php");
	$sql_voteLaunch = 
		"INSERT INTO `vote` (memNo, votQ, votA, votB, votACount, votBCount, votDate, votDeadline) 
		VALUES ('{$memNo}', '{$votQ}', '{$votA}', '{$votB}', 1 , 1 ,now(), adddate(now(),interval 7 day))";
	$voteLaunch = $pdo->prepare($sql_voteLaunch);
	$voteLaunch->execute();
	echo "新增成功！";

	$sql_addCoin = 
		"UPDATE `member` 
		SET `starCoin` = `starCoin`+ 50 
		WHERE `member`.`memNo` = {$memNo}";
	$pdo->exec($sql_addCoin);
	echo "更新成功！";

} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
//送出json字串
echo json_encode($voteLaunch);
?>