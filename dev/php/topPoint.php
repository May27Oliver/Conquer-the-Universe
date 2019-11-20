<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");

    $sql1="select popularity from `member` where starNo=1";
    $point1=$pdo->query($sql1);
    $sql2="select popularity from `member` where starNo=2";
    $point2=$pdo->query($sql2);
    $sql3="select popularity from `member` where starNo=3";
    $point3=$pdo->query($sql3);
    
    $pointRow1=$point1->fetchAll(PDO::FETCH_ASSOC);
    $pointRow2=$point2->fetchAll(PDO::FETCH_ASSOC);
    $pointRow3=$point3->fetchAll(PDO::FETCH_ASSOC);
    
    $total1=0;
    $total2=0;
    $total3=0;

    for($i=0;$i<=count($pointRow1)-1;$i++){
        $total1+=$pointRow1[$i]['popularity'];
    }
    for($i=0;$i<=count($pointRow2)-1;$i++){
        $total2+=$pointRow2[$i]['popularity'];
    }
    for($i=0;$i<=count($pointRow3)-1;$i++){
        $total3+=$pointRow3[$i]['popularity'];
    }

    $arr=[$total1,$total2,$total3];

    echo json_encode($arr);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>