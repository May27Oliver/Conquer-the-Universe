<?php 
require_once("../connectPDO.php");
$votNo=$_REQUEST["votNo"];
try{
    $sql = "UPDATE `vote` 
            SET `votACount` = `votACount`+ 1 
            WHERE `vote`.`votNo` = {$votNo}";
    $pdo->exec($sql);
  }catch(PDOException $e){
    echo $arr["error"] = "error";
  }
?>