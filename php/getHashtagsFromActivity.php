<?php

//Get other PHP files
require('config.php');
require('authorization.php');

// Define variables
$activityID = $_POST["activityID"];

// Get Hashtag data from the database
$sql = "

SELECT h.ID, h.hashtag FROM hashtag h 
INNER JOIN activity_has_hashtag junc ON h.ID = junc.hashtag_id
WHERE junc.activity_id = '$activityID';

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}
