<?php 
$errMsg = "";
$votNo = $_REQUEST["votNo"];
$reportMsg = $_REQUEST["reportMsg"];

try{
    require_once("../connectPDO.php");
    $sql_voteReport = 
      "INSERT INTO `votreport` (votNo, votReportMsg, votReportStatus) VALUES ('{$votNo}', '{$reportMsg}', '0')";
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
<!-- 考慮投票成功後回傳新票數 -->