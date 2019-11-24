<?php
session_start();
//個人編輯會員資料撈取候選人圖
$errMsg="";
$starNo=$_SESSION["starNo"];
try{
  require_once("connectPDO.php");
  $sql2 = "select starsRole,starNo from `stars` WHERE `stars`.`starNo` = {$starNo}" ;
  $starsRole=$pdo->query($sql2);
  $arrStarsRole=[];
  for($i=0;$i<1;$i++){
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