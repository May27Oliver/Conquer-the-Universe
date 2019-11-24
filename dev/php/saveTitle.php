<?php
session_start();
//個人編輯會員資料撈取
$errMsg="";
$memNo=$_SESSION["memNo"];
$titleName=$_GET["titleName"];
try{
    require_once("connectPDO.php");
    $sql = "update `member` set titleName=:titleName WHERE `memNo`= {$memNo}" ;
    $saveTitle = $pdo->prepare($sql);
    $saveTitle ->bindValue(":titleName",$titleName);
    $saveTitle ->execute();

}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>