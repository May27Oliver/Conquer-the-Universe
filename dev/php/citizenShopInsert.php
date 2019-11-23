<?php 
$errMsg = "";
$memNo=$_GET["memNo"];
$clothNo = $_GET["clothNo"];
$clothImg = $_GET["clothImg"];
$clothClass = $_GET["clothClass"];
$clothName = $_GET["clothName"];
// print_r($_GET);
// print_r($clothImg);

try {
	require_once("connectPDO.php");
	$sql="insert into `membercloth` (memNo,clothNo,clothImg,onDuty,clothClass,clothName) values (:memNo,:clothNo,:clothImg,0,:clothClass,:clothName)";
	$memberCloth = $pdo->prepare($sql);
    $memberCloth->bindValue(":memNo", $memNo);
    $memberCloth->bindValue(":clothNo", $clothNo);
    $memberCloth->bindValue(":clothImg", $clothImg);
    $memberCloth->bindValue(":clothClass", $clothClass);
    $memberCloth->bindValue(":clothName", $clothName);
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