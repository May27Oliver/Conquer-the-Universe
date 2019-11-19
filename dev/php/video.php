<?php 
require_once('connectPDO.php');
try{
    // 財經影片一問題一
    $fnV1P1=$_POST['fnV1P1'];
    $fnV1P2=$_POST['fnV1P2'];
    $fnV2P1=$_POST['fnV2P1'];
    $fnV2P2=$_POST['fnV2P2'];
    $fnV1P2=$_POST['fnV1P2'];
    if($fnV1P1==3){
        $moneyAdd = 5;
        $sql="UPDATE `member` 
              SET `popularity` = `popularity`+ {$moneyAdd} 
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }else{
        $moneyCut = 4;
        $sql="UPDATE `member`
              SET `popularity` = popularity-{$moneyCut} 
              WHERE `member`.`memNo` = 1";
        $pdo->exec($sql);
    }
    // 財經影片一問題二
    // $fnV1P2=$_POST['fnV1P2'];
    // if($fnV1P2==4){
    //     $moneyAdd = 5;
    //     $sql="UPDATE `member` 
    //           SET `popularity` = `popularity`+ {$moneyAdd} 
    //           WHERE `member`.`memNo` = 1";
    //     $pdo->exec($sql);
    // }else{
    //     $moneyCut = 4;
    //     $sql="UPDATE `member`
    //           SET `popularity` = popularity-{$moneyCut} 
    //           WHERE `member`.`memNo` = 1";
    //     $pdo->exec($sql);
    // }
}catch(PDOException $e){
    echo $e->getMessage();
}
?>