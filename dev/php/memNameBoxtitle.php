<?php
//個人編輯會員資料撈取
$errMsg="";
try{
  require_once("connectPDO.php");
  $sql2 = "select titleName from `member` join membertitle join title on (member.memNo=membertitle.memNo and title.titleNo=membertitle.titleNo)" ;
  $title=$pdo->query($sql2);
  $arr2=[];
  for($i=0;$i<6;$i++){
    $titleRow=$title->fetch(PDO::FETCH_ASSOC);
    $arr2[$i]=$titleRow;
}
echo json_encode($arr2);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>