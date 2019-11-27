<?php
$errMsg="";
try{
    require_once("connectPDO.php");
    $sql="select msgReportNo,`msgReport`.newsMsgNo,newsMsgContent from `newsMsg`,`msgReport` where `newsMsg`.newsMsgNo=`msgReport`.newsMsgNo order by msgReportNo";
    $msgRe=$pdo->query($sql);
    $msgReRow=$msgRe->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($msgReRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>