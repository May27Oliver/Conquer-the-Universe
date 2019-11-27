<?php
$errMsg = "";
try {
		require_once("php/connectPDO.php");
		$sql = "insert into `clothinmarket` (clothNo,clothClass, clothName, clothImg, clothPrice, clothDescription,popularAmount) values (null, :clothClass, :clothName, '' ,:clothPrice, :clothDescription,:popularAmount)";
		$newProduct = $pdo->prepare($sql);
		$newProduct->bindValue(":clothClass",$_REQUEST['clothClass']);
		$newProduct->bindValue(":clothName",$_REQUEST['clothName']);
		$newProduct->bindValue(":clothPrice",$_REQUEST['clothPrice']);
        $newProduct->bindValue(":clothDescription",$_REQUEST['clothDescription']);
        $newProduct->bindValue(":popularAmount",$_REQUEST['popularAmount']);
		$newProduct->execute();
        $clothNo = $pdo->lastInsertId();
        echo "新增商品成功";


		if( $_FILES["clothImg"]["error"] == UPLOAD_ERR_OK){

			//後台的存檔路徑
			$upload_dir = "../dest/img/";
			//寫進資料庫的路徑
			$save_dir = "img/";

			$fileName = "shopPic".$clothNo.".png";

			//商品圖片
			$from = $_FILES["clothImg"]["tmp_name"];
			$to = "$upload_dir" . "$fileName";
			copy( $from, $to);


			$sql = "update clothinmarket set clothImg = :clothImg where clothNo = $clothNo";
			$newproduct = $pdo->prepare($sql);
			$newproduct -> bindValue(":clothImg", "$save_dir"."$fileName");
			$newproduct -> execute();
			// header('Location:product.html');
			echo "<script> {window.alert('新增商品成功');location.href='product.html'} </script>";

		}else{
			echo "錯誤代碼 : {$_FILES["clothImg"]["error"]} <br>";
			echo "新增失敗<br>";
		}

	} catch (PDOException $e) {
		$errMsg = $errMsg . "錯誤訊息: " . $e->getMessage() . "</br>";
		$errMsg .= "錯誤行號: " . $e->getLine() . "<br>";
        echo $errMsg;
	}

?>