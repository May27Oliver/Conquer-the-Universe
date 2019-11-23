<?php 
require_once("../connectPDO.php");
$votNo=$_REQUEST["votNo"];
try{
    $sql = "UPDATE `vote` 
            SET `votACount` = `votACount`+ 1 
            WHERE `vote`.`votNo` = {$votNo}";
    $voteYes=$pdo->query($sql);
    $voteYesCount=$voteYes->fetch(PDO::FETCH_ASSOC);
    echo $voteYesCount["votACount"];
  }catch(PDOException $e){
    echo $voteYesCount["error"] = "error";
  }
?>
<!-- 考慮投票成功後回傳新票數 -->