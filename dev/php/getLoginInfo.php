<?php 
session_start();
if(isset($_SESSION["memId"]) == true){
	$result = array("memName"=>$_SESSION["memName"],"email"=>$_SESSION["email"],"starCoin"=>$_SESSION["starCoin"]);
	echo json_encode($result);	
}else{
	echo "{}";
}
//新增starCoin