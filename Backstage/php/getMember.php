<?php
$errMsg="";
try{
    require_once("connectPDO.php");
    $sql="select memNo,memName,memId,memPsw,email,starName,popularity,starCoin from `member`,`stars` where `member`.starNo=`stars`.starNo order by memNo";
    $member=$pdo->query($sql);
    $memberRow=$member->fetchAll(PDO::FETCH_ASSOC);
   
    echo json_encode($memberRow);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>