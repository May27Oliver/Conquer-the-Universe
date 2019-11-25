<?php
session_start();
$errMsg="";
$newsNo =$_REQUEST["getNewsNO"];
// $memNo = $_SESSION["memNo"];

try{
    require_once("../php/connectPDO.php");
    // $player=$_REQUEST["member"];
    $sql="select * from `news2`where newsNo={$datetime}";
    $news=$pdo->query($sql);
    $arr=[];
   

    while($newsRow=$news->fetch(PDO::FETCH_ASSOC)){ 
        array_push($arr,$newsRow);
    //    $arr[$i]=$newsRow;
        
    }
    $news ->execute();
   
    
        echo json_encode($arr);
  
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>


