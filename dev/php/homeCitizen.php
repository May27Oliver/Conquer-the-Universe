<?php
session_start();
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql = "select memNo,memName,memId,memPsw,email from `member` WHERE `member`.`memNo` = {$memNo}";
  $member=$pdo->query($sql);
  $arr=[];
  for($i=0;$i<6;$i++){
    $memRow=$member->fetch(PDO::FETCH_ASSOC);
    $arr[$i]=$memRow;
}
echo json_encode($arr);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>