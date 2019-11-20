<?php
//個人編輯會員資料撈取獎牌(星球圖)
$errMsg="";
try{
  require_once("meiDa.php");
  $sql2 = "select starsBall from `stars` where starNo" ;
  $starsBall=$pdo->query($sql2);
  $arrStarsBall=[];
  for($i=0;$i<6;$i++){
    $starsBallRow=$starsBall->fetch(PDO::FETCH_ASSOC);
    $arrStarsBall[$i]=$starsBallRow;
}
echo json_encode($arrStarsBall);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>