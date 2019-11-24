<?php
//撈候選人身上裝備
session_start();
$errMsg=""; 
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql = "select onDuty,clothimg,clothClass from `membercloth` where `memNo` = {$memNo} and onDuty = 1 and clothClass = 'Equi'" ;
  $roleEqui=$pdo->query($sql);
  $sql2 = "select onDuty,clothimg,clothClass from `membercloth` where `memNo` = {$memNo} and onDuty = 1 and clothClass = 'EquiHand'" ;
//   $sql = "select onDuty,clothimg from `membercloth` where `memNo` = {$memNo} and onDuty=1" ;
  $roleEqui2=$pdo->query($sql2);
  $arr=[];
  $arr1=[];
  $length = 1;
//   $roleEquiRow=$roleEqui->fetchAll(PDO::FETCH_ASSOC);
  
  for($i=0;$i<$length;$i++){
    $roleEquiRow=$roleEqui->fetch(PDO::FETCH_ASSOC);
    $arr[$i]=$roleEquiRow;
    $roleEquiRow2=$roleEqui2->fetch(PDO::FETCH_ASSOC);    
    $arr1[$i]=$roleEquiRow2;
}
$arrAll=[$arr,$arr1];
echo json_encode($arrAll);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>