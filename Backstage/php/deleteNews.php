<?php
//個人編輯會員資料撈取
$errMsg="";
$newsNo=$_GET["newsNo"];
echo $newsNo;
try{
    require_once("connectPDO.php");

    $sql = "DELETE FROM `news2` WHERE newsNo= {$newsNo}" ;
    $byeNews = $pdo->prepare($sql);
    $byeNews ->execute();

    // $sql2 = "update `newsReport` set newsReportStatus=1 WHERE newsNo= {$newsNo}";
    // $renewSta = $pdo->prepare($sql);
    // $renewSta ->bindValue("newsReportStatus",1);
    // $renewSta ->execute();

}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>