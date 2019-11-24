<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");

    $sql = "delete from `membertitle`";
    $clear = $pdo->prepare($sql);
    $clear->execute();

    $sql="select memNo,wisdom,charisma,finance from `member`";
    $memData=$pdo->query($sql);
    $memDataRow=$memData->fetchAll(PDO::FETCH_ASSOC);

    $sqlTitle="select titleNo,titleName,titleRule,titleSet from title";
    $titleData=$pdo->query($sqlTitle);
    $titleDataRow=$titleData->fetchAll(PDO::FETCH_ASSOC);

    for($j=1;$j<count($titleDataRow);$j++){
        ${'rule'.$j}=$titleDataRow[$j]['titleRule'];
        ${'set'.$j}=$titleDataRow[$j]['titleSet'];
        for($i=0;$i<count($memDataRow);$i++){
            if($memDataRow[$i][${'rule'.$j}]>=${'set'.$j}){
                $sqlGet="insert into `membertitle`(memNo,titleNo) values (:memNo,:titleNo)";
                $getTitle = $pdo->prepare($sqlGet);
                $getTitle ->bindValue(":memNo",$memDataRow[$i]['memNo']);
                $getTitle ->bindValue(":titleNo",$titleDataRow[$j]['titleNo']);
                $getTitle ->execute();
            }
        }
    }
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>