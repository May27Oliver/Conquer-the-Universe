<?php 
session_start();
if(isset($_SESSION["memNo"]) == true){
	$result = array("memNo"=>$_SESSION["memNo"],"memeName"=>$_SESSION["memeName"]);
	echo json_encode($result);	
}else{
	echo "{}";
}
