<?php 
$errMsg = "";
session_start();
$memNo=$_SESSION["memNo"];
$clothNo1 = $_GET["clothNo1"];
$clothImg1 = $_GET["clothImg1"];
$clothClass1 = $_GET["clothClass1"];
$clothName1 = $_GET["clothName1"];
// print_r($_GET);
// print_r($clothImg);

try {
	require_once("connectPDO.php");
	$sql="insert into `membercloth` (memNo,clothNo,clothImg,onDuty,clothClass,clothName) values ( {$memNo},:clothNo1,:clothImg1,0,:clothClass1,:clothName1)";
	$memberCloth = $pdo->prepare($sql);
    $memberCloth->bindValue(":clothNo1", $clothNo1);
    $memberCloth->bindValue(":clothImg1", $clothImg1);
    $memberCloth->bindValue(":clothClass1", $clothClass1);
    $memberCloth->bindValue(":clothName1", $clothName1);
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