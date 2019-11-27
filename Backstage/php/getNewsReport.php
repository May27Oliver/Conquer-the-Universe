<?php
$errMsg="";
try{
    require_once("connectPDO.php");
    $sql="select newsReportNo,`newsReport`.newsNo,newsContent from `news2`,`newsReport` where `news2`.newsNo=`newsReport`.newsNo order by newsReportNo";
    $newsRe=$pdo->query($sql);
    $newsReRow=$newsRe->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($newsReRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>