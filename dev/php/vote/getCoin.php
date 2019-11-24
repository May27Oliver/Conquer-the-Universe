<?php
$errMsg = "";
$starCoin = $_GET["starCoin"];
if(isset($_SESSION["memNo"])==true){
	$result = 
}else{
	echo {};
}

try {
	require_once("../connectPDO.php");
	session_start();
	$sql_getCoin = 
	"select starCoin 
	from `member`
	where memNo=:{$memNo}";
	$getCoin = $pdo->prepare($sql_getCoin);
	$getCoin->execute();

	
	//找得到並取回資料
	$addCoin = $getCoin->fetch(PDO::FETCH_ASSOC);
	$addCoin["starCoin"]+=100;
	$sql_addCoin = 
		"update `member` 
		set starCoin='{$addCoin["starCoin"]}'
		where memNo=:{$memNo}";

	//送出json字串
	echo json_encode($arrayEnd);
	
} catch (PDOException $e) {
	$errMsg .= "錯誤訊息: {$e->getMessage()}</br>";
	$errMsg .= "錯誤行號: {$e->getLine()}<br>";
	if( $errMsg != ""){
		echo $errMsg;
		exit();
	}
}
?>