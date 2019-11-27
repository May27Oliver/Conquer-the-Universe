<?php
//個人編輯會員資料撈取
$errMsg="";
$clothNo=$_GET["clothNo"];
echo $clothNo;
try{
    require_once("connectPDO.php");

    $sql = "DELETE FROM `clothinmarket` WHERE clothNo= {$clothNo}" ;
    $byePro = $pdo->prepare($sql);
    $byePro ->execute();

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