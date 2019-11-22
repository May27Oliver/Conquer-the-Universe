<?php 
require_once("connectPDO.php");
session_start();
$arr = array();
try{
    $sql = "select * from `member` where memId=:memId and memPsW=:memPsw";
    $member = $pdo->prepare( $sql);
    $member->bindValue(":memId", $_POST["memId"]);
    $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    if( $member->rowCount() !=0){
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        // echo $memRow["memName"];
      
      //登入成功,將登入者的資料寫入session
    $_SESSION["memNo"] = $memRow["memNo"];
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["email"] = $memRow["email"];
    $_SESSION["starNo"] = $memRow["starNo"];
    
    $arr["memNo"] = $memRow["memNo"];
    $arr["memId"] = $memRow["memId"];
    $arr["memName"] = $memRow["memName"];
    $arr["email"] = $memRow["email"];
    $arr["starNo"] = $memRow["starNo"];
    $arr["error"] = "";

    }else{
      $arr["error"] = "帳號密碼錯誤請再試試~";
      
    } 
  }catch(PDOException $e){
    echo $arr["error"] = "error";
  }
  echo json_encode($arr);
?>