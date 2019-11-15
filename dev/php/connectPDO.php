<?php
    $dsn="mysql:host=localhost;port=3306;dbname=dd103g2;charset=utf8";
    $user="dd103g2";
    $password="dd103g2";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_CASE=>CASE_NATURAL);
    $pdo=new pdo($dsn,$user,$password,$options);
?>