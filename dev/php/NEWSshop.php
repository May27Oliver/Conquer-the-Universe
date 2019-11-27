<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
$balance = $_GET["balance"];
// print_r($_GET);
try {
    $balance=100;
	require_once("../php/connectPDO.php");
	$sql="update `member` set starCoin=starCoin-{$balance} WHERE `memNo` = {$memNo}";
	$updateStarCoin = $pdo->prepare($sql);
    $updateStarCoin->execute();
  
    // $sqlA="select starCoin from `member` where `memNo`={$memNo}";
    // $starCoinNum=$pdo->prepare($sqlA);
    // $starCoinNum->execute();
    // $Num = $starCoinNum->fetch(PDO::FETCH_ASSOC);
    // $_SESSION["starCoin"] = $Num["starCoin"]; //新增\

    // // $arr["starCoin"]= $Num["starCoin"];

    // // echo $Num ;

} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?> 