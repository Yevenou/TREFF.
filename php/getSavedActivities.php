<?php

//Get other PHP files
require('config.php');
require('authorization.php');

// Define variables
$user_ID = $_POST["userID"];

// Get ACTIVITY data from the database
$sql = "

SELECT SA.activity_id, ACTIVITY.ID, ACTIVITY.titel, ACTIVITY.datum, ACTIVITY.adresse, ST.stadt, ACTIVITY.beschreibung, ACTIVITY.bild, U.name, U.email, ACTIVITY.timestamp
FROM activity ACTIVITY
INNER JOIN user U
ON ACTIVITY.user = U.ID
INNER JOIN stadt ST
ON ACTIVITY.stadt = ST.ID
INNER JOIN saved_activity SA
ON SA.activity_id = ACTIVITY.ID 
WHERE SA.user_id = $user_ID
ORDER BY ACTIVITY.datum ASC

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}
