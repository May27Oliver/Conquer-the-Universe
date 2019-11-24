<?php 
session_start();
$errMsg = "";
$votNo = $_REQUEST["votNo"];
$memNo = $_SESSION["memNo"];

try{
    require_once("../connectPDO.php");
    $sql_voteB = 
        "UPDATE `vote` 
        SET `votBCount` = `votBCount`+ 1 
        WHERE `vote`.`votNo` = {$votNo}";
    $pdo->exec($sql_voteB);
    echo "更新成功！";
    
    $sql_record = 
        "INSERT INTO `votrecord` (votNo, memNo) 
        VALUES ({$votNo}, {$memNo})";
    $result = $pdo->exec($sql_record);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
}
?>