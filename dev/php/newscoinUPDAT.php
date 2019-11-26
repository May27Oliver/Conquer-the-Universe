<?php 
session_start();
$errMsg = "";
$memNo = $_SESSION["memNo"];
$balance = $_GET["balance"];
try {
	require_once("../php/connectPDO.php");
	$sql="update `member` set starCoin=:balance WHERE `member`.`memNo` = {$memNo}";
	$updateStarCoin = $pdo->prepare($sql);
    $updateStarCoin->bindValue(":memNo", $memNo);
    $updateStarCoin->bindValue(":balance", $balance);
    $updateStarCoin->execute();
    // if( $memEdit->rowCount() == 0 ){
    //     echo "{}";
    // }else{
    //     $memEditRows = $memEdit->fetchAll();
    //     echo json_encode($memEditRows);
    // }

} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?> 