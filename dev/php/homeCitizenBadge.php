<?php
//個人編輯會員資料撈取獎牌(星球圖)
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql2 = "select bandageimg from `bandage` where bandageNo" ;
  $badge=$pdo->query($sql2);
  $arrbadge=[];
  for($i=0;$i<6;$i++){
    $badgeRow=$badge->fetch(PDO::FETCH_ASSOC);
    $arrbadge[$i]=$badgeRow;
}
echo json_encode($arrbadge);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>