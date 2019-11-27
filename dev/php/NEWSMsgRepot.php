<?php 
$errMsg = "";
$newsMsgNo = $_REQUEST["newsNo"];
// $newsNo="4";
$reportMsg = $_REQUEST["reportMsg"];
try{
    require_once("../php/connectPDO.php");
    $sql_msgReport = 
      "INSERT INTO `msgreport` (msgReportNo, newsMsgNo, msgReportMsg, msgReportStatus) VALUES (null,'{$newsMsgNo}', '{$reportMsg}', '0')";
    $msgReport = $pdo->prepare($sql_msgReport);
    $msgReport->execute();
    //送出json字串
    // echo json_encode($newsReport);
  }catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}</br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
      echo $errMsg;
      exit();
    }
  }
?>