<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
    $sql="select memName,popularity,wisdom,charisma,finance from `member` order by popularity desc limit 6";
    $player=$pdo->query($sql);
    $sql1="select memName,popularity,wisdom,charisma,finance from `member` where starNo=1 order by popularity desc limit 6";
    $player1=$pdo->query($sql1);
    $sql2="select memName,popularity,wisdom,charisma,finance from `member` where starNo=2 order by popularity desc limit 6";
    $player2=$pdo->query($sql2);
    $sql3="select memName,popularity,wisdom,charisma,finance from `member` where starNo=3 order by popularity desc limit 6";
    $player3=$pdo->query($sql3);
    $arr=[];
    $arr1=[];
    $arr2=[];
    $arr3=[];
    for($i=0;$i<6;$i++){
        $playerRow=$player->fetch(PDO::FETCH_ASSOC);
        $arr[$i]=$playerRow;
        $playerRow1=$player1->fetch(PDO::FETCH_ASSOC);
        $arr1[$i]=$playerRow1;
        $playerRow2=$player2->fetch(PDO::FETCH_ASSOC);
        $arr2[$i]=$playerRow2;
        $playerRow3=$player3->fetch(PDO::FETCH_ASSOC);
        $arr3[$i]=$playerRow3;
    }
    $arrAll=[$arr,$arr1,$arr2,$arr3];
    echo json_encode($arrAll);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>