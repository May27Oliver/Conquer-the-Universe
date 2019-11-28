<?php
$errMsg="";
$voteNo=$_GET["voteNo"];
echo $voteNo;
try{
    require_once("connectPDO.php");

    $sql = "DELETE FROM `vote` WHERE votNo= {$voteNo}" ;
    $byeVote = $pdo->prepare($sql);
    $byeVote ->execute();

    // $sql = "UPDATE `votreport` SET votReportStatus=1 WHERE votNo= {$voteNo}" ;
    // $byeVote ->exec();

}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>