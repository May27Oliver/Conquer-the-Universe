<?php
//個人編輯會員資料撈取候選人圖
session_start();
$errMsg="";
$memNo=$_SESSION["memNo"];
try{
  require_once("connectPDO.php");
  $sql = "select * from `membercloth` WHERE memNo = {$memNo}" ;
  // $sql = "select clothNo,clothimg,clothName from `clothinmarket` where clothNo" ;
  $membercloth=$pdo->query($sql);
  $arr=[];
//   $length = 3;
  $memberclothRow=$membercloth->fetchAll(PDO::FETCH_ASSOC);
    for($i=0;$i<count($memberclothRow);$i++){
        
        $arr[$i]=$memberclothRow;

    }
echo json_encode($memberclothRow);
}catch(PDOException $e){
  $errMsg.="錯誤原因：".$e->getMessage()."<br>";
  $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>