<?php
require_once("connectPDO.php");
session_start();
//個人編輯會員資料撈取獎牌(星球圖)
$errMsg="";
$starNo=$_SESSION["starNo"];
try{
  $sql2 = "select starsBall from `stars` WHERE `stars`.`starNo` = {$starNo}" ;
  $starsBall=$pdo->query($sql2);
  $arrStarsBall=[];
  for($i=0;$i<6;$i++){
    $starsBallRow=$starsBall->fetch(PDO::FETCH_ASSOC);
    $arrStarsBall[$i]=$starsBallRow;
}
echo json_encode($arrStarsBall);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>