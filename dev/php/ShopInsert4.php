<?php 
$errMsg = "";
session_start();
$memNo=$_SESSION["memNo"];
$clothNo4 = $_GET["clothNo4"];
$clothImg4 = $_GET["clothImg4"];
$clothClass4 = $_GET["clothClass4"];
$clothName4 = $_GET["clothName4"];
// print_r($_GET);
// print_r($clothImg);

try {
	require_once("connectPDO.php");
	$sql="insert into `membercloth` (memNo,clothNo,clothImg,onDuty,clothClass,clothName) values ( {$memNo},:clothNo4,:clothImg4,0,:clothClass4,:clothName4)";
	$memberCloth = $pdo->prepare($sql);
    $memberCloth->bindValue(":clothNo4", $clothNo4);
    $memberCloth->bindValue(":clothImg4", $clothImg4);
    $memberCloth->bindValue(":clothClass4", $clothClass4);
    $memberCloth->bindValue(":clothName4", $clothName4);
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