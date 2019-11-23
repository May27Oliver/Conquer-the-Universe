<?php
//個人編輯會員資料撈取候選人圖
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql = "select clothNo,clothimg,clothName,clothClass from `clothinmarket` where memNo" ;
  // $sql = "select clothNo,clothimg,clothName from `clothinmarket` where clothNo" ;
  $todayEqui=$pdo->query($sql);
  $arrTodayEqui=[];
  $length = 6;
  for($i=0;$i<$length;$i++){
    $todayEquiRow=$todayEqui->fetch(PDO::FETCH_ASSOC);
    $arrTodayEqui[$i]=$todayEquiRow;

    shuffle($arrTodayEqui); //打亂

    $Equi=$arrTodayEqui[0];//只取第一個定義變數
}
echo json_encode($Equi);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>