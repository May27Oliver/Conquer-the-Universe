<?php
//個人編輯會員資料撈取候選人圖
$errMsg="";
try{
  require_once("meiDa.php");
  $sql2 = "select starsRole from `stars` where starNo" ;
  $starsRole=$pdo->query($sql2);
  $arrStarsRole=[];
  for($i=0;$i<6;$i++){
    $starsRoleRow=$starsRole->fetch(PDO::FETCH_ASSOC);
    $arrStarsRole[$i]=$starsRoleRow;
}
echo json_encode($arrStarsRole);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>