<?php 
$errMsg = "";
session_start();
$memNo=$_SESSION["memNo"];
$clothNo2 = $_GET["clothNo2"];
$clothImg2 = $_GET["clothImg2"];
$clothClass2 = $_GET["clothClass2"];
$clothName2 = $_GET["clothName2"];
// print_r($_GET);
// print_r($clothImg);

try {
	require_once("connectPDO.php");
	$sql="insert into `membercloth` (memNo,clothNo,clothImg,onDuty,clothClass,clothName) values ( {$memNo},:clothNo2,:clothImg2,0,:clothClass2,:clothName2)";
	$memberCloth = $pdo->prepare($sql);
    $memberCloth->bindValue(":clothNo2", $clothNo2);
    $memberCloth->bindValue(":clothImg2", $clothImg2);
    $memberCloth->bindValue(":clothClass2", $clothClass2);
    $memberCloth->bindValue(":clothName2", $clothName2);
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