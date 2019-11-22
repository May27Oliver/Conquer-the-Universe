<?php
$errMsg = "";
try {
	require_once("../connectPDO.php");
	$sql_runCards = 
	"select *
	from `vote` v,`member` m
	where v.memNo=m.memNo and v.votDeadline>=now()
	order by v.votNo desc";
	$runCards = $pdo->prepare($sql_runCards);
	$runCards->execute();
} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}</br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
//找得到並取回資料
$arrayRun = [];
while($runCardsRow = $runCards->fetch(PDO::FETCH_ASSOC)){
	array_push($arrayRun,$runCardsRow);
};
//送出json字串
echo json_encode($arrayRun);
?>