<?php
session_start();
$errMsg = "";
$memNo = $_SESSION["memNo"];

try{
    require_once("../connectPDO.php");
    
    $sql_check =
        "SELECT * FROM `vote` 
        WHERE `vote`.`memNo`={$memNo} and `vote`.`votDate`=CURDATE()";
    $check = $pdo->prepare($sql_check);
    $check->execute();
    
    //找得到並取回資料
    $arrayCheck = [];
    while($checkRow = $check->fetch(PDO::FETCH_ASSOC)){
        array_push($arrayCheck,$checkRow);
    };
    //送出json字串
    echo json_encode($arrayCheck);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
        echo $errMsg;
        exit();
    }
}
?>