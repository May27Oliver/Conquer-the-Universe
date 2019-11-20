<?php 
session_start();
if(isset($_SESSION["memId"]) == true){
	$result = array("memName"=>$_SESSION["memName"],"email"=>$_SESSION["email"]);
	echo json_encode($result);	
}else{
	echo "{}";
}
