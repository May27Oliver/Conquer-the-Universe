<?php
$errMsg = "";
try {
	require_once("../connectPDO.php");
	$sql_runCards = 
		"SELECT *
		FROM `vote` v,`member` m
		WHERE v.memNo=m.memNo and v.votDeadline>=now()
		ORDER BY v.votNo DESC";
	$runCards = $pdo->prepare($sql_runCards);
	$runCards->execute();

	//找得到並取回資料
	$arrayRun = [];
	while($runCardsRow = $runCards->fetch(PDO::FETCH_ASSOC)){
		array_push($arrayRun,$runCardsRow);
	};
	//送出json字串
	echo json_encode($arrayRun);

} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
?>