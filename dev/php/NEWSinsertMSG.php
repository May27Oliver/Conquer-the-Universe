<?php
session_start();
$newsMSG=$_REQUEST["newsMSG"];
$newsNo =$_REQUEST["getNewsNO"];
$memNo = $_SESSION["memNo"];
$memName = $_SESSION["memName"];

// $newsNo="1";
// $memNo="1";
$datetime = date ("Y-m-d H:i:s");
$errMsg="";


// print_r($_POST);
//insert into newsmsg values( null, $newsNO, $memNo, CURDATE(), $msgContent

// exit($newsMSG);
try{
    require_once("../php/connectPDO.php");
    // $sql="INSERT INTO `newsmsg`(`newsMsgNo`, `newsMsgContent`) values(null,'{$newsMSG}');";

    $sql="INSERT INTO `newsmsg` (`newsMsgNo`, `newsNo`, `memNo`, `newsMsgDate`, `newsMsgContent`) VALUES (NULL, '{$newsNo}', '{$memNo}', '{$datetime}', '{$newsMSG}')";

    // INSERT INTO `newsmsg` (`newsMsgNo`, `newsNo`, `memNo`, `newsMsgDate`, `newsMsgContent`) VALUES (NULL, '1', '1', '2019-11-20', '測試123321');

    $newsMSG_result = $pdo->prepare($sql);
    // $newsMSG -> bindValue(":newsMsgContent", $_POST["newsMSG"]);
    $newsMSG_result ->execute();

    $result = array();
    $result["memName"] = $memName;
    $result["newsMsgDate"] = $datetime;
    $result["newsMSG"] = $newsMSG;
    //echo "新增成功~";
    echo json_encode($result); 

}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
    echo "error : ", $errMsg;
}


?>