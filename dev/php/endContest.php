<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");

    $sql="select starNo,starName,starPopularity,starsRole,stageImg from stars order by starPopularity desc";
    $starPoint=$pdo->query($sql);
    
    $starPointRow=$starPoint->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($starPointRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>