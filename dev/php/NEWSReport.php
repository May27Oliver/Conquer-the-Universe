<?php 
$errMsg = "";
$newsNo = $_REQUEST["newNo"];
$reportMsg = $_REQUEST["reportMsg"];

try{
    require_once("../php/connectPDO.php");
    $sql_voteReport = 
      "INSERT INTO `newsreport` (newsNo, newsReportMsg, newsReportStatus) VALUES ('{$newsNo}', '{$reportMsg}', '0')";
    $voteReport = $pdo->prepare($sql_voteReport);
    $voteReport->execute();
    //送出json字串
    echo json_encode($voteReport);
  }catch(PDOException $e){
    $errMsg .= "錯誤訊息: {$e->getMessage()}</br>";
    $errMsg .= "錯誤行號: {$e->getLine()}<br>";
    if( $errMsg != ""){
      echo $errMsg;
      exit();
    }
  }
?>