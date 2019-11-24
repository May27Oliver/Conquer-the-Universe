<?php 
require_once('connectPDO.php');
session_start();
try{
    $memberNo=$_SESSION["memNo"];
    $sql = "select starCoin from `member` where memNo={$memberNo}";
    $member = $pdo->prepare($sql);
    $member->execute();
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    $_SESSION["starCoin"] = $memRow["starCoin"]; //新增

    $arr["starCoin"] = $memRow["starCoin"]; //新增
    // echo $arr["starCoin"];
    echo $arr["starCoin"];
}catch(PDOException $e){
    echo $e->getMessage();
}
?>