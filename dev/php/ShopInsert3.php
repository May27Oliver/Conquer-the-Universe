<?php 
$errMsg = "";
session_start();
$memNo=$_SESSION["memNo"];
$clothNo3 = $_GET["clothNo3"];
$clothImg3 = $_GET["clothImg3"];
$clothClass3 = $_GET["clothClass3"];
$clothName3 = $_GET["clothName3"];
// print_r($_GET);
// print_r($clothImg);

try {
	require_once("connectPDO.php");
	$sql="insert into `membercloth` (memNo,clothNo,clothImg,onDuty,clothClass,clothName) values ( {$memNo},:clothNo3,:clothImg3,0,:clothClass3,:clothName3)";
	$memberCloth = $pdo->prepare($sql);
    $memberCloth->bindValue(":clothNo3", $clothNo3);
    $memberCloth->bindValue(":clothImg3", $clothImg3);
    $memberCloth->bindValue(":clothClass3", $clothClass3);
    $memberCloth->bindValue(":clothName3", $clothName3);
    $memberCloth->execute();
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