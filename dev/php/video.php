<?php 
require_once('connectPDO.php');
// 尚未寫抓取會員id的式子
// $memId=$_POST[''];
//財經區問題
$fnV1P1=(int)$_POST['fnV1P1'];
$fnV1P2=(int)$_POST['fnV1P2'];
$fnV2P1=(int)$_POST['fnV2P1'];
$fnV2P2=(int)$_POST['fnV2P2'];
$fnV3P1=(int)$_POST['fnV3P1'];
$fnV3P2=(int)$_POST['fnV3P2'];
$fnV4P1=(int)$_POST['fnV4P1'];
$fnV4P2=(int)$_POST['fnV4P2'];
$fnV5P1=(int)$_POST['fnV5P1'];
$fnV5P2=(int)$_POST['fnV5P2'];
// 思辨區問題
$JtV1P1=(int)$_POST['JtV1P1'];
$JtV1P2=(int)$_POST['JtV1P2'];
$JtV2P1=(int)$_POST['JtV2P1'];
$JtV2P2=(int)$_POST['JtV2P2'];
$JtV3P1=(int)$_POST['JtV3P1'];
$JtV3P2=(int)$_POST['JtV3P2'];
$JtV4P1=(int)$_POST['JtV4P1'];
$JtV4P2=(int)$_POST['JtV4P2'];
$JtV5P1=(int)$_POST['JtV5P1'];
$JtV5P2=(int)$_POST['JtV5P2'];
// 美學區問題
$AsV1P1=(int)$_POST['AsV1P1'];
$AsV1P2=(int)$_POST['AsV1P2'];
$AsV2P1=(int)$_POST['AsV2P1'];
$AsV2P2=(int)$_POST['AsV2P2'];
$AsV3P1=(int)$_POST['AsV3P1'];
$AsV3P2=(int)$_POST['AsV3P2'];
$AsV4P1=(int)$_POST['AsV4P1'];
$AsV4P2=(int)$_POST['AsV4P2'];
$AsV5P1=(int)$_POST['AsV5P1'];
$AsV5P2=(int)$_POST['AsV5P2'];
$starCoin = 100;
try{
    // 財經影片一問題一
    if($fnV1P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV1P2==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV2P1==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV2P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV3P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV3P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV4P1==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV4P2==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV5P1==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($fnV5P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV1P1==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV1P1==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV1P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV1P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV2P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV2P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV2P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV3P1==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV3P1==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV3P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV4P1==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV4P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV5P1==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV5P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($JtV5P2==2){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV1P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV1P2==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV2P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV2P2==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV3P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV3P2==4){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV4P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV4P2==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV5P1==1){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }elseif($AsV5P2==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }else{
        $moneyCut = 4;
        $sql="UPDATE `member`
              SET `popularity` = popularity-{$moneyCut} 
              , `starCoin` = `starCoin`+ {$starCoin}
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }
}catch(PDOException $e){
    echo $e->getMessage();
}
?>