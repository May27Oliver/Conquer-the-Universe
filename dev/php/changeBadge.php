<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
    $sql1="select memNo,memName,badgeNo from `member` where starNo=1 order by popularity desc";
    $player1=$pdo->query($sql1);
    $sql2="select memNo,memName,badgeNo from `member` where starNo=2 order by popularity desc";
    $player2=$pdo->query($sql2);
    $sql3="select memNo,memName,badgeNo from `member` where starNo=3 order by popularity desc";
    $player3=$pdo->query($sql3);
    
    $playerRow1=$player1->fetchAll(PDO::FETCH_ASSOC);
    $playerRow2=$player2->fetchAll(PDO::FETCH_ASSOC);
    $playerRow3=$player3->fetchAll(PDO::FETCH_ASSOC);

    $sqlNew1 = "update `member` set badgeNo = 4 where starNo =1";
    $newBadage1 = $pdo->prepare($sqlNew1);
    $newBadage1->bindValue("badgeNo", 4);
    $newBadage1->execute();

    $sqlNew2 = "update `member` set badgeNo = 5 where starNo =2";
    $newBadage2 = $pdo->prepare($sqlNew2);
    $newBadage2->bindValue("badgeNo", 5);
    $newBadage2->execute();

    $sqlNew3 = "update `member` set badgeNo = 6 where starNo =3";
    $newBadage3 = $pdo->prepare($sqlNew3);
    $newBadage3->bindValue("badgeNo", 6);
    $newBadage3->execute();

    $no1_1=$playerRow1[0]['memNo'];
    $no1_2=$playerRow2[0]['memNo'];
    $no1_3=$playerRow3[0]['memNo'];

    $sqlAward1 = "update `member` set badgeNo = '1' where memNo = $no1_1 or memNo = $no1_2 or memNo = $no1_3";
    $getAward1 = $pdo->prepare($sqlAward1);
    $getAward1->bindValue("badgeNo", 1);
    $getAward1->execute();

    $no2_1=$playerRow1[1]['memNo'];
    $no2_2=$playerRow2[1]['memNo'];
    $no2_3=$playerRow3[1]['memNo'];

    $sqlAward2 = "update `member` set badgeNo = '2' where memNo = $no2_1 or memNo = $no2_2 or memNo = $no2_3";
    $getAward2 = $pdo->prepare($sqlAward2);
    $getAward2->bindValue("badgeNo", 2);
    $getAward2->execute();

    $no3_1=$playerRow1[2]['memNo'];
    $no3_2=$playerRow2[2]['memNo'];
    $no3_3=$playerRow3[2]['memNo'];

    $sqlAward3 = "update `member` set badgeNo = '3' where memNo = $no3_1 or memNo = $no3_2 or memNo = $no3_3";
    $getAward3 = $pdo->prepare($sqlAward3);
    $getAward3->bindValue("badgeNo", 3);
    $getAward3->execute();


}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>