<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
$balance = $_GET["balance"];
// $popularityAll = $_GET["popularityAll"];
// print_r($_GET);
try {
    $popularityAdd = 10;
    $cost=100;
	require_once("connectPDO.php");
	$sql="update `member` set starCoin=starCoin-{$cost} WHERE `memNo` = {$memNo}";
	$updateStarCoin = $pdo->prepare($sql);
    // $updateStarCoin->bindValue(":memNo", $memNo);
    // $updateStarCoin->bindValue(":balance", $balance);
    // $updateStarCoin->bindValue(":popularityAll", $popularityAll);
    $updateStarCoin->execute();
    // if( $memEdit->rowCount() == 0 ){
    //     echo "{}";
    // }else{
    //     $memEditRows = $memEdit->fetchAll();
    //     echo json_encode($memEditRows);
    // }
    $sqlA="select starCoin from `member` where `memNo`={$memNo}";
    $starCoinNum=$pdo->prepare($sqlA);
    $starCoinNum->execute();
    $Num = $starCoinNum->fetch(PDO::FETCH_ASSOC);
    $_SESSION["starCoin"] = $Num["starCoin"]; //新增\

    // $arr["starCoin"]= $Num["starCoin"];

    // echo $Num ;

} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?> 