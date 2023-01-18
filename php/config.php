<?php

// log into SQL Server
$host = "";
$user = "";
$password = "";
$dbname = "";

// Define PDO statement
$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");