<?php

//Get other PHP files
require('config.php');
require('authorization.php');

// Get ACTIVITY data from the database
$sql = "SELECT ACTIVITY.ID, ACTIVITY.titel, ACTIVITY.bild, ACTIVITY.adresse, ST.stadt, ACTIVITY.beschreibung, U.name, U.email, ACTIVITY.datum, ACTIVITY.timestamp
FROM activity ACTIVITY
INNER JOIN user U
ON ACTIVITY.user = U.ID
INNER JOIN stadt ST
ON ACTIVITY.stadt = ST.ID
ORDER BY ACTIVITY.timestamp DESC;

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}
