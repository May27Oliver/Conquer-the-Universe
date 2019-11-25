<?php
//撈商城商品
// sesssion_start();
$errMsg="";
// $memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql = "select clothNo,clothimg,clothName,clothPrice,popularAmount,clothClass from `clothinmarket` where clothNo" ;
//   $sql2 = "select popularity from `member` where `memNo` = {$memNo}" ;
  $shopEqui=$pdo->query($sql);
//   $memPop=$pdo->query($sql2);
  $arrShopEqui=[];
  $arrMemPop=[];
//   $length = 6;
  $shopEquiRow=$shopEqui->fetchAll(PDO::FETCH_ASSOC);
//   $memPopRow=$memPop->fetchAll(PDO::FETCH_ASSOC);
//   for($i=0;$i<$length;$i++){
    
    // $arrShopEqui=$shopEquiRow;
    // $arrMemPop=$memPopRow;
// }
// $arrAll=[$shopEquiRow, $memPopRow];
echo json_encode($shopEquiRow);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>