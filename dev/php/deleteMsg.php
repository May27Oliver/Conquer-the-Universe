<?php
//個人編輯會員資料撈取
$errMsg="";
$msgNo=$_GET["msgNo"];
echo $msgNo;
try{
    require_once("connectPDO.php");

    $sql = "DELETE FROM `newsmsg` WHERE newsMsgNo= {$msgNo}" ;
    $byeMsg = $pdo->prepare($sql);
    $byeMsg ->execute();

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