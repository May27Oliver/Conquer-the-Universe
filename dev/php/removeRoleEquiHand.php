<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
// print_r($_GET);
try {
	require_once("connectPDO.php");
    $sql="update `membercloth` set onDuty=0 WHERE `memNo` = {$memNo} and `clothClass` = 'EquiHand'";
    $updateOnDuty = $pdo->prepare($sql);
    $updateOnDuty->bindValue(":memNo", $memNo);
    $updateOnDuty->bindValue(":onDuty",0);
    $updateOnDuty->execute();



} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?>