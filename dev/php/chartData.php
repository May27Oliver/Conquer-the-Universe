<?php
//個人編輯會員資料撈取
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql2 = "select wisdom,charisma,finance from `member` order by memNo limit 1" ;
  $chartData=$pdo->query($sql2);
  $arr=[];
  for($i=0;$i<6;$i++){
    $chartDataRow=$chartData->fetch(PDO::FETCH_ASSOC);
    $arr[$i]=$chartDataRow;
}
echo json_encode($arr);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>