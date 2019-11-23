<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
    $sql1="select memName from `member` where starNo=1 order by popularity desc limit 1";
    $player1=$pdo->query($sql1);
    $sql2="select memName from `member` where starNo=2 order by popularity desc limit 1";
    $player2=$pdo->query($sql2);
    $sql3="select memName from `member` where starNo=3 order by popularity desc limit 1";
    $player3=$pdo->query($sql3);
  
    $playerRow1=$player1->fetch(PDO::FETCH_ASSOC);
    $playerRow2=$player2->fetch(PDO::FETCH_ASSOC);
    $playerRow3=$player3->fetch(PDO::FETCH_ASSOC);

    $sqlIn1 = "update `stars` set firstMemName = :firstMemName where starNo =1";
    $starIn1 = $pdo->prepare($sqlIn1);
    $starIn1->bindValue(":firstMemName", $playerRow1['memName']);
    $starIn1->execute();

    $sqlIn2 = "update `stars` set firstMemName = :firstMemName where starNo =2";
    $starIn2 = $pdo->prepare($sqlIn2);
    $starIn2->bindValue(":firstMemName", $playerRow2['memName']);
    $starIn2->execute();

    $sqlIn3 = "update `stars` set firstMemName = :firstMemName where starNo =3";
    $starIn3 = $pdo->prepare($sqlIn3);
    $starIn3->bindValue(":firstMemName", $playerRow3['memName']);
    $starIn3->execute();


    echo json_encode($playerRow1);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>