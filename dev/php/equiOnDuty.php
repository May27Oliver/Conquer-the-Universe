<?php 
session_start();
$errMsg = "";
$memNo=$_SESSION["memNo"];
$equiClothClass= $_GET["equiClothClass"];
$equiMemClothNo= $_GET["equiMemClothNo"];
print_r($_GET);
try {
	require_once("connectPDO.php");
    // $sql="update `membercloth` set onDuty=1 WHERE `memNo` = {$memNo}";
    // $sql="update `membercloth` set onDuty=0 WHERE `memNo` = {$memNo} and `clothClass` = :equiClothClass";
    $sql="update `membercloth` set onDuty=0 WHERE `memNo` = {$memNo} and `clothClass` = '{$equiClothClass}'";
    $updateOnDuty = $pdo->prepare($sql);
    $updateOnDuty->bindValue(":memNo", $memNo);
    $updateOnDuty->bindValue(":onDuty",0);
    $updateOnDuty->bindValue(":equiClothClass", $equiClothClass);
    $updateOnDuty->execute();

    $sql1="update `membercloth` set onDuty=1 WHERE `memNo` = {$memNo} and `memClothNo` = {$equiMemClothNo}";
	$updateOnDuty1 = $pdo->prepare($sql1);
    $updateOnDuty1->bindValue(":memNo", $memNo);
    $updateOnDuty1->bindValue(":onDuty",1);
    $updateOnDuty1->bindValue(":equiMemClothNo", $equiMemClothNo);
    $updateOnDuty1->execute();
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