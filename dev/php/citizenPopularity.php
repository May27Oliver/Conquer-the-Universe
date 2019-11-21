<?php
session_start();
//個人貢獻支持度
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql = "select popularity from `member` WHERE `member`.`memNo` = {$memNo}";
  $citizenPopularity=$pdo->query($sql);
  $arr=[];
  for($i=0;$i<6;$i++){
    $PopuRow=$citizenPopularity->fetch(PDO::FETCH_ASSOC);
    $arr[$i]=$PopuRow;
}
echo json_encode($arr);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>