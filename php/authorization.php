<?php

// Recall config file
require('config.php');

// Load function to delete older sessions from the database
deleteSessions();

// Authorize server variables
$userID = $_SERVER["PHP_AUTH_USER"];
$token = $_SERVER["PHP_AUTH_PW"];

// Select userID and token used less than 2 hours ago
$sql = "
SELECT *
FROM session
WHERE User_ID = '$userID'
AND Token = '$token'
AND Timestamp > (NOW() - INTERVAL 2 HOUR)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $results = $stmt->fetchAll();

    $sessionID = $results[0]['ID'];

    $numberResults = count($results);

    if($numberResults == 1) {
        
        updateSession($sessionID);

    } else {

        exit(http_response_code(401));

    }

}

// Update timestamp in the session if reloaded
function updateSession($sessionID){

    require('config.php');

    $sql = "UPDATE session SET timestamp = now() WHERE ID=?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$sessionID]);

}

// Delete all sessions older than 2 hours
function deleteSessions(){

    require('config.php');

    $sql = " DELETE FROM session WHERE timestamp < (NOW() - INTERVAL 2 HOUR);";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

}