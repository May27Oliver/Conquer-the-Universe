<?php
$errMsg="";
try{
    require_once("connectPDO.php");
    $sql="select clothNo,clothClass,clothName,clothImg,clothPrice,clothDescription,popularAmount from `clothinmarket` order by clothNo desc";
    $pro=$pdo->query($sql);
    $proRow=$pro->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($proRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>