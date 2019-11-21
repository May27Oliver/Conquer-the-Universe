<?php
    $dsn="mysql:host=localhost;port=3306;dbname=dd103g2;charset=utf8";
    $user="root";
    $password="101banana";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo=new pdo($dsn,$user,$password,$options);
?>