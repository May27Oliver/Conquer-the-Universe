<?php 
$errMsg = "";
session_start();

try {
	require_once("connectPDO.php");
	$sql='update `member` set memPsw=:memPsw,email=:email order by memNo limit 1';
	$memEdit=$pdo->prepare($sql);
	$memEdit->bindValue(':memPsw',$_REQUEST["memPsw"]);
	$memEdit->bindValue(':email',$_REQUEST["email"]);
    $memEdit->execute();
    // if( $memEdit->rowCount() == 0 ){
    //     echo "{}";
    // }else{
    //     $memEditRows = $memEdit->fetchAll();
    //     echo json_encode($memEditRows);
    // }

} catch (PDOException $e) {
	$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
    $errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
    echo $errMsg;
}
?> 