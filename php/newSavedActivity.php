<?php

// Recall config file
require('config.php');

// Define variables
$activity_ID = $_POST["activityID"];
$user_ID = $_POST["userID"];

// Insert form data into user database
$sql = "INSERT INTO saved_activity (activity_ID, user_ID) VALUES (:Activity_ID, :User_ID)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Activity_ID' => $activity_ID, 'User_ID' => $user_ID));

// Validation logic
if ($erfolg) {

    print_r('Activity joined successfully!');


} else {

    // gib die Fehlermeldung aus
    print_r($erfolg);
    print_r('You already have this activity');
};