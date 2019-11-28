<?php
$errMsg="";
try{
    require_once("connectPDO.php");
    $sql = 
        "SELECT * 
        FROM `vote`,`votreport` 
        WHERE `vote`.votNo=`votreport`.votNo 
        ORDER BY votReportNo";
    $votRe=$pdo->query($sql);
    $votReRow=$votRe->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($votReRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>