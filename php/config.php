<?php

// log into SQL Server
$host = "localhost";
$user = "581695_1_1";
$password = "nxc0qYvNs4az";
$dbname = "581695_1_1";

// Define PDO statement
$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");