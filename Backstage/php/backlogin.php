<?php 
require_once("connectPDO.php");
session_start();
$arr = array();
try{
    $sql = "select * from `admin` where adminId=:adminId and adminPsw=:adminPsw";
    $admin = $pdo->prepare( $sql);
    $admin->bindValue(":adminId", $_POST["adminId"]);
    $admin->bindValue(":adminPsw", $_POST["adminPsw"]);
    $admin->execute();
    if( $admin->rowCount() !=0){
        $adminRow = $admin->fetch(PDO::FETCH_ASSOC);
      
      //登入成功,將登入者的資料寫入session
    $_SESSION["adminNo"] = $adminRow["adminNo"];
    $_SESSION["adminId"] = $adminRow["adminId"];
    $_SESSION["adminName"] = $adminRow["adminName"];
    
    $arr["adminNo"] = $adminRow["adminNo"];
    $arr["adminId"] = $adminRow["adminId"];
    $arr["adminName"] = $adminRow["adminName"];

    $arr["error"] = "";

    }else{
      $arr["error"] = "帳號密碼錯誤請再試試~";
      
    } 
  }catch(PDOException $e){
    echo $arr["error"] = "error";
  }
  echo json_encode($arr);
?>