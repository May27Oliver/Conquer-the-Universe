<?php 
// $value=$_REQUEST["fnV1P1"];
// echo '$value=',$value;
require_once('connectPDO.php');
try{
    $value=$_REQUEST["fnV1P1"];
    $ans=$_REQUEST["memNo"];//會員編號
    $memId=$_REQUEST["memId"];//會員名稱
    // $sql='select * from `member`';
    // $pdo->query($sql);
    
    if($value==3){
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
}catch(PDOException $e){
    echo $e->getMessage();
}
?>