<?php
session_start();
$errMsg = "";
$memNo = $_SESSION["memNo"];

try{
    require_once("../connectPDO.php");
    $sql_voted = 
        "SELECT * FROM `votrecord` 
        WHERE `votrecord`.`memNo` = {$memNo}";
    $voted = $pdo->prepare($sql_voted);
    $voted->execute();

    //找得到並取回資料
    $arrayVoted = [];
    while($votedRow = $voted->fetch(PDO::FETCH_ASSOC)){
        array_push($arrayVoted,$votedRow);
    };
    //送出json字串
    echo json_encode($arrayVoted);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
}
?>