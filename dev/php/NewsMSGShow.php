<?php
session_start();
$errMsg="";
// $newsNO = "96";
$newsNO = $_REQUEST["getNewsNO"];
// $memNo = $_SESSION["memNo"];
// exit($getNewsNO);
try{
    require_once("../php/connectPDO.php");
    // SELECT a.*, b.* FROM `TABLE1` as a, `TABLE2` as b where a.id = b.id
    // $sql="select a.*,b.*,c.* from `news2` as a,`newsmsg` as b,`member` as c where a.newsNo=b.newsNo and b.memNo=c.memNo order by newsMsgDate DESC" ;
    // select a.*,b.*,c.* from `news2` as a,`newsmsg` as b,`member` as c where a.newsNo=96 AND b.newsNo=96 and b.memNo=c.memNo order by newsMsgDate DESC
    // $sql="select a.*,b.*,c.* from `news2` as a,`newsmsg` as b,`member` as c where a.newsNo={$newsNO} and b.newsNo={$newsNO} and b.memNo=c.memNo order by newsMsgDate DESC" ;
    $sql = "SELECT `news2`.`newsNo`, 
                   `newsmsg`.`newsMsgDate`, 
                   `newsmsg`.`newsMsgContent`, 
                   `member`.`memName`
            FROM `dd103g2`.`news2` 
            LEFT JOIN `dd103g2`.`newsmsg` ON `news2`.`newsNo` = `newsmsg`.`newsNo`
            LEFT JOIN `dd103g2`.`member` ON `newsmsg`.`memNo` = `member`.`memNo` 
            WHERE `news2`.`newsNo` = {$newsNO} order by newsMsgDate DESC";
    // $sql="select a.*,b.*,c.* from `news2` as a,`newsmsg` as b,`member` as c where a.newsNo=b.newsNo and b.memNo=c.memNo and a.newsNo={$newsNO} order by newsMsgDate DESC" ;

    $news=$pdo->query($sql);
    $news ->execute();
    $newsRows=$news->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($newsRows);
    // $arr=[];
    // while( $newsRow=$news->fetch(PDO::FETCH_ASSOC)){ 
    //     array_push($arr,$newsRow);
    // //    $arr[$i]=$newsRow;
      
    // }
    //        echo json_encode($arr);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>


