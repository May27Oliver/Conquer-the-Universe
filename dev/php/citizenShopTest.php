<?php 
// session_start();

$errMsg = "";
$memNo=$_SESSION["memNo"];
$starCoin = 100;
try {
	require_once("connectPDO.php");
    $sql="update `member` set `starCoin`=`starCoin` -  {$starCoin} WHERE `memNo`";
    $pdo->exec($sql);
	// $updateStarCoin = $pdo->prepare($sql);
    // $updateStarCoin->bindValue(":memNo", $memNo);
    // $updateStarCoin->execute();
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