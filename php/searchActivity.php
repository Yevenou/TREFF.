<?php

//Get other PHP files
require('config.php');
require('authorization.php');


$userID = $_POST["userID"];
$hashtags = $_POST['hashtags'];


// Get ACTIVITY data from the database
$sql = "SELECT A.ID, A.titel, A.bild, A.adresse, ST.stadt, A.beschreibung, U.name, U.email, A.datum, A.timestamp
FROM activity A
INNER JOIN user U
ON A.user = U.ID
INNER JOIN stadt ST
ON A.stadt = ST.ID
INNER JOIN activity_has_hashtag
ON A.ID = activity_has_hashtag.activity_id
WHERE activity_has_hashtag.hashtag_id = $hashtags;";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);

}


