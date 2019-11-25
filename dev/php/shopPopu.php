<?php
//撈商城商品
session_start();
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  
  $sql2 = "select popularity from `member` where `memNo` = {$memNo}" ;
 
  $memPop=$pdo->query($sql2);

  $arrMemPop=[];
//   $length = 6;

  $memPopRow=$memPop->fetchAll(PDO::FETCH_ASSOC);
//   for($i=0;$i<$length;$i++){
    
    // $arrShopEqui=$shopEquiRow;
    // $arrMemPop=$memPopRow;
// }
// $arrAll=[$shopEquiRow, $memPopRow];
echo json_encode($memPopRow);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>