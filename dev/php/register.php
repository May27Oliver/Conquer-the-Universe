<?php
    require_once("connectPDO.php");
    $memIdRig=$_POST["memIdRig"];
    $memPswRig=$_POST["memPswRig"];
    $memNameRig=$_POST["memNameRig"];
    $memEmailRig=$_POST["memEmailRig"];
    $starSelect=$_POST["starSelect"];
    try{
        if(isset($_POST["memIdRig"])==true || isset($_POST["starSelect"])==true || isset($_POST["memPswRig"])==true || isset($_POST["memEmailRig"])==true){
           $sql="INSERT INTO `member`(starNo,badageNo,memId,memPsw,memName,email,popularity,wisdom,charisma,finance,starCoin) 
              VALUES (:starSelect,0,:memIdRig,:memPswRig,:memNameRig,:memEmailRig,0,0,0,0,0)";
            $member=$pdo->prepare($sql);
            $member->bindValue(":memIdRig",$memIdRig);
            $member->bindValue(":starSelect",$starSelect);
            $member->bindValue(":memPswRig",$memPswRig);
            $member->bindValue(":memNameRig",$memNameRig);
            $member->bindValue(":memEmailRig",$memEmailRig);
            $member->execute(); 
        }else{
            echo "有資料尚未填寫完成哦~";
        }
        
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>