<?php

//Get other PHP files
require('config.php');
require('authorization.php');


// Get Hashtag data from the database
$sql = "SELECT * FROM hashtag";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}
