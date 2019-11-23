<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");

    $sql="select endPoint from stars order by endPoint desc";
    $starPoint=$pdo->query($sql);
    $starPointRow=$starPoint->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($starPointRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>