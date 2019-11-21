<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
   
    $sql = "update `member` set popularity=0 , wisdom=0 , charisma=0 , finance=0 ";
    $clear = $pdo->prepare($sql);
    $clear->bindValue("popularity", 0);
    $clear->bindValue("wisdom", 0);
    $clear->bindValue("charisma", 0);
    $clear->bindValue("finance", 0);
    $clear->execute();

}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>