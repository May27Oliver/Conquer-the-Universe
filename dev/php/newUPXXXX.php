<?php
    $errMsg = "";
    $memNo="1";
    $newsNo= "1";
//$user_no=13;
try {
    require_once("../php/connectPDO.php");
    session_start();

    $sql_vote = 
    "select * from news2 where  newsNo = {$newsNo}";
    $UP_item = $pdo->prepare($sql_vote);
    $vote_item->execute();

}
catch (PDOException $e) {
    $errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
}
    $vote_box= $vote_item -> fetch(PDO::FETCH_ASSOC);
    $vote_box['newUP']=$vote_box['newsUP']+1;

    $sql_vote_up=
    " UPDATE news2 SET newsUP = '{$vote_box['newsUP']}'
    WHERE `news2`.`newsNo` = {$newsNo};";
    
    $user_vote_up = $pdo->prepare($sql_vote_up);
    $user_vote_up ->execute();
    
    echo($vote_box['newsUP']);






    
?>