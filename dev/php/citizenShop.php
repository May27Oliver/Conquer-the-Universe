<?php 
$errMsg = "";
$memNo=$_GET["memNo"];
$balance = $_GET["balance"];
$popularityAll = $_GET["popularityAll"];
print_r($_GET);
try {
    $popularityAdd = 10;
	require_once("connectPDO.php");
	$sql="update `member` set starCoin=:balance , `popularity`=:popularityAll WHERE `memNo` = :memNo";
	$updateStarCoin = $pdo->prepare($sql);
    $updateStarCoin->bindValue(":memNo", $memNo);
    $updateStarCoin->bindValue(":balance", $balance);
    $updateStarCoin->bindValue(":popularityAll", $popularityAll);
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