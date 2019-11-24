<?php 
session_start();
if(isset($_SESSION["adminId"]) == true){
	$result = array("adminNo"=>$_SESSION["adminNo"],"adminId"=>$_SESSION["adminId"],"adminName"=>$_SESSION["adminName"],);
	echo json_encode($result);	
}else{
	echo "{}";
}
