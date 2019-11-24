<?php
session_start();
//個人編輯會員資料撈取
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
    require_once("connectPDO.php");
    $sql = "select `titleName` from `member` WHERE `memNo`= {$memNo}" ;
    $title=$pdo->query($sql);
    $titleRow=$title->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($titleRow);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>