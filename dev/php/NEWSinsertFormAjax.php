<?php
$file=(empty($_FILES['file']))?"":$_FILES['file']; 
$newsPoint=(empty($_REQUEST['newsPoint']))?"":$_REQUEST['newsPoint']; 
$newsTitle=(empty($_REQUEST['newsTitle']))?"":$_REQUEST['newsTitle']; 
$newsContent=(empty($_REQUEST['newsContent']))?"":$_REQUEST['newsContent']; 
$Planet=(empty($_REQUEST['Planet']))?"":$_REQUEST['Planet']; 
$var1=(empty($_REQUEST['newsPoint']))?"":$_REQUEST['newsPoint']; 
// print_r($_POST);
// print_r($file);

$newspic=$_POST['newspic'];
$Planet=$_POST["Planet"];
$newsPoint=$_POST["newsPoint"];
$newsTitle=$_POST["newsTitle"];
$newsContent=$_POST["newsContent"];
$newsNo="1";
$memNo="1";
$newsDeadline=date('Y-m-d H:i:s',strtotime('+1 day'));
$datetime = date ("Y-m-d H:i:s");
$errMsg="";
// print_r($file["error"]);

try{
    if( $file["error"] == UPLOAD_ERR_OK){
    require_once("connectPDO.php");
    // $sql="INSERT INTO `newsmsg`(`newsMsgNo`, `newsMsgContent`) values(null,'{$newsMSG}');";

    $sql="INSERT INTO `news2` (`newsNo`, `newsTitle`,`newsDate`,`newsDeadline`, `newsContent`, `image`,`starNo`, `pointRaise`) VALUES (null, '{$newsTitle}','{$datetime}','{$newsDeadline}', '{$newsContent}','', '{$Planet}','{$newsPoint}')";

    // "INSERT INTO `news2`(`newsNo`, `newsTitle`,`newsDate`,`newsDeadline`, `newsContent`, `image`, `starNo`, `pointRaise`) values(null, :newsTitle,'{$datetime}','{$newsDeadline}', :newsContent,'', :Planet, :newsPoint)";
    
    $news2 = $pdo->prepare($sql);
    // $newsMSG -> bindValue(":newsMsgContent", $_POST["newsMSG"]);
    $news2 ->execute();
    echo "新增成功~";

    // 取得自動創號的key值
    $newsNo = $pdo->lastInsertId();
 
// 先檢查images資料夾存不存在
if( file_exists("images") === false){
    mkdir("images");
}
//將檔案copy到要放的路徑
$fileinfo = pathinfo($file["name"]);
$fileName = "{$newsNo}.{$fileInfoArr["extension"]}";  //8.gif
// print_r($fileName);
$from = $file["tmp_name"];
$to = "images/$fileName";
if(copy( $from, $to)===true){
    //將檔案名稱寫回資料庫
    $sql = "update news2 set image = :image where newsNo = $newsNo";
    $news2 = $pdo->prepare($sql);
    $news2 -> bindValue(":image", $fileName);
    $news2 -> execute();
    echo "新增成功~";
    $pdo->commit();			
}else{
    $pdo->rollBack();
}


}else{
    echo "錯誤代碼 : {$file["error"]} <br>";
    echo "新增失敗<br>";
    $pdo->rollBack();
}



}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}

echo $errMsg;
?>