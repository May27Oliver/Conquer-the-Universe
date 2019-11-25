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
    echo "新增成功！";
    
    $sql_voteB = 
        "UPDATE `vote` 
        SET `votBCount` = `votBCount`+ 1 
        WHERE `vote`.`votNo` = {$votNo}";
    $pdo->exec($sql_voteB);
    echo "更新成功！";

    $sql_addCoin = 
        "UPDATE `member` 
        SET `starCoin` = `starCoin`+ 10 
        WHERE `member`.`memNo` = {$memNo}";
    $pdo->exec($sql_addCoin);
    echo "更新成功！";

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
}
?>