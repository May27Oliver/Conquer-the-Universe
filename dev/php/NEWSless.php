<?php
session_start();
$newsless=$_REQUEST["newsless"];
$newsNo =$_POST["getNewsNO"];
$memNo = $_SESSION["memNo"];

// $newsNo="1";
// $memNo="1";
// $datetime = date ("Y-m-d H:i:s");
$errMsg="";
echo($news);
try{
    require_once("../php/connectPDO.php");
    // sql='UPDATE `vote` 
   
    $sql="UPDATE news2 SET newsDown = newDown+'1'
    WHERE `news2`.`newsNo` = {$newsNo};";

    // INSERT INTO `newsmsg` (`newsMsgNo`, `newsNo`, `memNo`, `newsMsgDate`, `newsMsgContent`) VALUES (NULL, '1', '1', '2019-11-20', '測試123321');

    $newsMSG = $pdo->prepare($sql);
    // $newsMSG -> bindValue(":newsMsgContent", $_POST["newsMSG"]);
    $newsMSG ->execute();

    echo "新增成功~";
    

}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}

echo $errMsg;
?>