<?php
//個人編輯會員資料撈取
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql = "select memName from `member` order by memNo limit 1";
  $memNameBox=$pdo->query($sql);
  $arr1=[];
  for($i=0;$i<6;$i++){
    $memRow=$memNameBox->fetch(PDO::FETCH_ASSOC);
    $arr1[$i]=$memRow;
   
}
echo json_encode($arr1);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>