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

	$sql_check =
        "SELECT * FROM `vote` 
        WHERE `vote`.`memNo`={$memNo} and `vote`.`votDate`= CURDATE()";
    $check = $pdo->query($sql_check);

    if($check->rowCount()==0){
		$sql_voteLaunch = 
			"INSERT INTO `vote` (memNo, votQ, votA, votB, votACount, votBCount, votDate, votDeadline) 
			VALUES ('{$memNo}', '{$votQ}', '{$votA}', '{$votB}', 1 , 1 ,now(), adddate(now(),interval 7 day))";
		$voteLaunch = $pdo->prepare($sql_voteLaunch);
		$voteLaunch->execute();
		// echo json_encode($voteLaunch);
	
		$sql_addCoin = 
			"UPDATE `member` 
			SET `starCoin` = `starCoin`+ 50 
			WHERE `member`.`memNo` = {$memNo}";
		$pdo->exec($sql_addCoin);
	
		//扣完宇宙幣後要把新的宇宙幣數值fetch回來，並存進session裡面
		$sql_afterCut="select starCoin from `member` where memNo={$memNo}";
		$afterCut = $pdo->prepare($sql_afterCut);
		$afterCut->execute();
		$number = $afterCut->fetch(PDO::FETCH_ASSOC);
		$_SESSION["starCoin"] = $number["starCoin"];
	
		//送出json字串
		echo $number["starCoin"];
    }

} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
?>