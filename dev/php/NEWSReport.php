<?php 
$errMsg = "";
$newsNo = $_REQUEST["newsNo"];
// $newsNo="4";
$reportMsg = $_REQUEST["reportMsg"];

try{
   
    require_once("../php/connectPDO.php");
    $sql_newsReport = 
      "INSERT INTO `newsreport` (newsReportNo, newsNo, newsReportMsg, newsReportStatus) VALUES (null,'{$newsNo}', '{$reportMsg}', '0')";
    $newsReport = $pdo->prepare($sql_newsReport);
    $newsReport->execute();
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