<?php

//Get other PHP files
require('config.php');
require('authorization.php');

// Define variables
$userID = $_POST["userID"];

// Get userID from the database
$sql = "SELECT name FROM user WHERE ID = $userID";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}