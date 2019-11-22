<?php
require_once("connectPDO.php");
$memId=$_POST["memIdRig"];
try{
  $sql = "select * from `member` where memId=:memId";
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $memId);
  $member->execute();
  if( $member->rowCount() !=0){
    echo "帳號已存在";
  }else{
    echo "帳號可使用";
  } 
}catch(PDOException $e){
  echo "error";
}
?>