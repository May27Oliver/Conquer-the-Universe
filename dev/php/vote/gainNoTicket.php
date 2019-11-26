<?php 
session_start();
$errMsg = "";
$votNo = $_REQUEST["votNo"];
$memNo = $_SESSION["memNo"];

try{
    require_once("../connectPDO.php");
    
    $sql_record = 
        "INSERT INTO `votrecord` (votNo, memNo) 
        VALUES ({$votNo}, {$memNo})";
    $pdo->exec($sql_record);
    
    $sql_voteB = 
        "UPDATE `vote` 
        SET `votBCount` = `votBCount`+ 1 
        WHERE `vote`.`votNo` = {$votNo}";
    $pdo->exec($sql_voteB);

    $sql_addCoin = 
        "UPDATE `member` 
        SET `starCoin` = `starCoin`+ 10 
        WHERE `member`.`memNo` = {$memNo}";
    $pdo->exec($sql_addCoin);

    //扣完宇宙幣後要把新的宇宙幣數值fetch回來，並存進session裡面
    $sql_afterCut="select starCoin from `member` where memNo={$memNo}";
    $afterCut = $pdo->prepare($sql_afterCut);
    $afterCut->execute();
    $number = $afterCut->fetch(PDO::FETCH_ASSOC);
    $_SESSION["starCoin"] = $number["starCoin"];

    echo $number["starCoin"];

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
}
?>