<?php 
require_once("connectPDO.php");
$adminName=$_POST["newAdminName"];
$adminPsw=$_POST["newAdminPsw"];
try{
    $sql="INSERT INTO `admin`(adminId,adminPsw,adminName) 
    VALUES (:adminId,:adminPsw,'管理員')";
    $admin=$pdo->prepare($sql);
    $admin->bindValue(":adminId",$adminName);
    $admin->bindValue(":adminPsw",$adminPsw);
    $admin->execute();     

}catch(PDOException $e){
    echo $arr["error"] = "error";
}
?>