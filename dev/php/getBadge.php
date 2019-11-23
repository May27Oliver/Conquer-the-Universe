<?php
session_start();
//個人編輯會員資料撈取
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql ="select badgeImg from `member`,`badge` where `member`.badgeNo = `badge`.badgeNo and `member`.memNo = {$memNo}";
  
  $badge=$pdo->query($sql);
  $badgeRow=$badge->fetch(PDO::FETCH_ASSOC);

echo json_encode($badgeRow);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>