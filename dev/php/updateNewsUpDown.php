<?php
$errMsg="";
$newsNo = $_REQUEST["newsNo"];
$action = $_REQUEST["action"];
try{
    require_once("../php/connectPDO.php");
    // $player=$_REQUEST["member"];
    if( $action == "up"){
        $sql="update `news2` set newsUP = newsUP + 1 where newsNo=". $newsNo;
    }else{
        $sql="update `news2` set newsDown = newsDown + 1 where newsNo=". $newsNo;
    }
    $news=$pdo->query($sql);

    echo "OK";
  
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
    echo "error :".$errMsg;
}

?>