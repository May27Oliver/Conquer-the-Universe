<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
$popularityAdd = 5;
try {
	require_once("connectPDO.php");
	$sql="UPDATE `member` set `popularity`= popularity+{$popularityAdd} WHERE `memNo` = {$memNo}";
	$pdo->exec($sql);
} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?> 