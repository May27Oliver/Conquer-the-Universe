<?php
//個人編輯會員資料撈取
$errMsg="";
$memNo=$_GET["memNo"];
try{
    require_once("connectPDO.php");
    $sql = "DELETE  FROM `member` WHERE memNo= {$memNo}" ;
    $byeMember = $pdo->prepare($sql);
    $byeMember ->execute();

}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>