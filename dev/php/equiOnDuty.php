<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
// $equiclothClass = $_GET["equiclothClass"];
print_r($_GET);
try {
	require_once("connectPDO.php");
    $sql="update `membercloth` set onDuty=1 WHERE `memNo` = {$memNo}";
    // $sql="update `membercloth` set onDuty=1 WHERE `memNo` = :memNo and clothClass = :equiclothClass";
	$updateOnDuty = $pdo->prepare($sql);
    $updateOnDuty->bindValue(":memNo", $memNo);
    $updateOnDuty->bindValue(":onDuty",1);
    // $updateOnDuty->bindValue(":equiclothClass", $equiclothClass);
    $updateOnDuty->execute();
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