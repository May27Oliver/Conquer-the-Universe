<?php
// print_r($_POST);
$errMsg = "";
$memNo = $_REQUEST["memNo"];
$votQ = $_REQUEST["votQ"];
$votA = $_REQUEST["votA"];
$votB = $_REQUEST["votB"];

try {
 require_once("../connectPDO.php");
 $sql_voteLaunch = 
    "insert into vote (memNo, votQ, votA, votB,votACount,votBCount ,votDate, votDeadline) 
    values ('{$memNo}', '{$votQ}', '{$votA}', '{$votB}', 1 , 1 ,now(), adddate(now(),interval 7 day))";
 $voteLaunch = $pdo->prepare($sql_voteLaunch);
 $voteLaunch->execute();
} catch (PDOException $e) {
 $errMsg .= "錯誤訊息: {$e->getMessage()}</br>";
 $errMsg .= "錯誤行號: {$e->getLine()}<br>";
 if( $errMsg != ""){
  echo $errMsg;
  exit();
 }
}
//送出json字串
echo json_encode($voteLaunch);
?>