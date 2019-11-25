<?php
$errMsg = "";
try {
	require_once("../connectPDO.php");
	$sql_endCards = 
	"select *
	from `vote` v,`member` m
	where v.memNo=m.memNo and v.votDeadline<now()
	order by v.votNo desc";
	$endCards = $pdo->prepare($sql_endCards);
	$endCards->execute();

	//找得到並取回資料
	$arrayEnd = [];
	while($endCardsRow = $endCards->fetch(PDO::FETCH_ASSOC)){
		array_push($arrayEnd,$endCardsRow);
	};
	//送出json字串
	echo json_encode($arrayEnd);

} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}<br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
?>