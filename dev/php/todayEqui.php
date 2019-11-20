<?php
//個人編輯會員資料撈取候選人圖
$errMsg="";
try{
  require_once("meiDa.php");
  $sql2 = "select clothimg from `clothinmarket` where clothNo" ;
  $todayEqui=$pdo->query($sql2);
  $arrTodayEqui=[];
  for($i=0;$i<6;$i++){
    $todayEquiRow=$todayEqui->fetch(PDO::FETCH_ASSOC);
    $arrTodayEqui[$i]=$todayEquiRow;
}
echo json_encode($arrTodayEqui);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>