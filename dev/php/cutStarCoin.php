<?php 
require_once('connectPDO.php');
session_start();
$event=$_GET["event"];
$popNum=100;
try{
    $memberNo=$_SESSION["memNo"];
    $sql="select starCoin from `member` where memNo={$memberNo}";
    $money = $pdo->prepare($sql);
    $money->execute();
    $moneyCount = $money->fetch(PDO::FETCH_ASSOC);
    if($moneyCount["starCoin"]>100){
        $moneyCut=100;
        $sql="UPDATE `member`
        SET `starCoin` = starCoin-{$moneyCut}
        WHERE `member`.`memNo` = {$memberNo}";

        $pdo->exec($sql);

        $sql="select starCoin from `member` where memNo={$memberNo}";
        $afterCut = $pdo->prepare($sql);
        $afterCut->execute();
        $number = $afterCut->fetch(PDO::FETCH_ASSOC);
        $_SESSION["starCoin"] = $number["starCoin"]; //新增

        $arr["starCoin"] = $number["starCoin"]; //新增

        echo $number["starCoin"];//回傳宇宙幣數值
        

        if($event==0 || $event==2){
            //支持度扣一百
            $sql="UPDATE `member`
            SET `popularity` = popularity-{$popNum}
            WHERE `member`.`memNo` = {$memberNo}";
        }elseif($event==1){
            //支持度加一百
            $sql="UPDATE `member`
            SET `popularity` = popularity+{$popNum}
            WHERE `member`.`memNo` = {$memberNo}";
        }

        $pdo->exec($sql);
        
    }else{
        echo "0";
    }
}catch(PDOException $e){
    echo $e->getMessage();
}
?>