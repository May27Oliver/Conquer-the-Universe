<?php
$errMsg="";
try{
    require_once("../php/connectPDO.php");
    // $player=$_REQUEST["member"];
    $sql="select * from `member` order by popularity desc limit 6";
    $player=$pdo->query($sql);
}catch(PDOException $e){
    $errMsg.="錯誤原因：".$e->getMessage()."<br>";
    $errMsg.="錯誤行號：".$e->getLine()."<br>";
}
echo $errMsg;
?>

<ul id="innerPlayer">
    <?php 
		while($playerRow=$player->fetch(PDO::FETCH_ASSOC)){ 
	?>		
		<li class="playList">
            <ul>
                <li class="playerRIA">1</li>
                <li class="playerName"><?php echo $playerRow["memName"];?></li>
                <li class="playerDevote"><?php echo $playerRow["popularity"];?></li>
                <li class="playerInt"><?php echo $playerRow["wisdom"];?></li>
                <li class="playerWealth"><?php echo $playerRow["charisma"];?></li>
                <li class="playerMoral"><?php echo $playerRow["finance"];?></li>
            </ul>
        </li>
	<?php 
		}
	?>		
</ul>