<?php
//撈今日商品
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql = "select clothNo,clothimg,clothName,clothPrice,popularAmount,clothClass from `clothinmarket` where clothNo" ;
  // $sql = "select clothNo,clothimg,clothName from `clothinmarket` where clothNo" ;
  $todayEqui=$pdo->query($sql);
  $arrTodayEqui=[];
  $length = 16;
  $todayEquiRow=$todayEqui->fetchAll(PDO::FETCH_ASSOC);
  for($i=0;$i<count($todayEquiRow);$i++){
    
    $arrTodayEqui[$i]=$todayEquiRow;

    shuffle($arrTodayEqui[$i]); //打亂

    $Equi=$arrTodayEqui[0][0];//只取第一個定義變數
}
echo json_encode($Equi);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>