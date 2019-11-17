<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
    // $player=$_REQUEST["member"];
    $sql="select memName,popularity,wisdom,charisma,finance from `member` order by popularity desc limit 6";
    $player=$pdo->query($sql);
    $arr=[];
    for($i=0;$i<6;$i++){
        $playerRow=$player->fetch(PDO::FETCH_ASSOC);
        $arr[$i]=$playerRow;
    }
    echo json_encode($arr);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>