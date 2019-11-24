<?php
session_start();
$errMsg = "";
$votNo = $_REQUEST["votNo"];
$memNo = $_SESSION["memNo"];

try{
    require_once("../connectPDO.php");
    $sql_voteA = 
        "UPDATE `vote` 
        SET `votACount` = `votACount`+ 1 
        WHERE `vote`.`votNo` = {$votNo}";
    $pdo->exec($sql_voteA);
    echo "SUCCESS";

    $sql_record = 
        "INSERT INTO `votrecord` (votNo, memNo) 
        VALUES ({$votNo}, {$memNo})";
    $pdo->exec($sql_record);

  }catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
  }
?>
<!-- 考慮投票成功後回傳新票數 -->