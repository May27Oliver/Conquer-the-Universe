<?php 
require_once("../connectPDO.php");
try{
    $sql = "SELECT votACount,votBCount,votA,votB
            FROM `vote`
            WHERE vote.votDeadline > now()";
    $vote=$pdo->query($sql);
    $voteCount=$vote->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($voteCount);
  }catch(PDOException $e){
    echo $voteYesCount["error"] = "error";
  }
?>