
<?php
session_start();
// print_r($_POST);
// $newsNo="1";
$memNo=$_SESSION["memNo"];

$datetime = date ("Y-m-d H:i:s");
$newsDeadline=date('Y-m-d H:i:s',strtotime('+1 day'));
$errMsg = "";
try {
	require_once("../php/connectPDO.php");
	$pdo->beginTransaction();
	//.......確定是否上傳成功
	if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
		
        $sql = "INSERT INTO `news2`(`newsNo`, `newsTitle`,`newsDate`,`newsDeadline`,`newsUP`, `newsDown`, `newsContent`, `image`, `starNo`,`memNo`, `pointRaise`) values(null, :newsTitle,'{$datetime}','{$newsDeadline}','0','0', :newsContent,'', :Planet,'{$memNo}', :newsPoint)";

        // INSERT INTO `news2` (`newsNo`, `fknews`, `newsDate`, `newsDeadline`, `newsUP`, `newsDown`, `newsTitle`, `newsContent`, `image`, `starNo`, `memNo`, `pointRaise`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '塞不進去', '爆炸了', NULL, '3', NULL, '-100');
        

		$news2 = $pdo->prepare( $sql );
		$news2 -> bindValue(":newsTitle", $_POST["newsTitle"]);
		$news2 -> bindValue(":newsContent", $_POST["newsContent"]);
		$news2 -> bindValue(":Planet", $_POST["Planet"]);
        $news2 -> bindValue(":newsPoint", $_POST["newsPoint"]);
		$news2 -> execute();

		//取得自動創號的key值
		$newsNo = $pdo->lastInsertId();

		//先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("images");
		}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["upFile"]["name"]);
		$fileName = "{$newsNo}.{$fileInfoArr["extension"]}";  //8.gif

		$from = $_FILES["upFile"]["tmp_name"];
		$to = "images/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "update news2 set image = :image where newsNo = $newsNo";
			$news2 = $pdo->prepare($sql);
			$news2 -> bindValue(":image", $fileName);
			$news2 -> execute();
			
		
			
			$pdo->commit();	
			echo "<script>history.go(-1)</script>";	
		}else{
			$pdo->rollBack();
		}

	}else{
		// echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
		echo "新增失敗:請重新上傳圖片(扣宇宙幣100)<br>";
		$pdo->rollBack();
	}
} catch (PDOException $e) {
	$pdo->rollBack();
	echo "新增失敗:請輸入支持度(扣宇宙幣100)<br>";
	// $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	// $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>    
