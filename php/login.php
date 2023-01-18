<?php

// Recall config file
require('config.php');

// Define form variables
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM user WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

// Validation logic
if ($erfolg) {

    $array = $stmt->fetchAll();

    $numberResults = count($array);

    if ($numberResults == 1) {

        $dbPassword = $array[0]['password'];
        $userID = $array[0]['ID'];

        proofpassword($password, $dbPassword, $userID);

    } else {
        // Invalid email given
        sendAnswer('E-mail does not exist', 0, 0);

    }

}

// Check if the password is valid 
function proofpassword($userPassword, $dbPassword, $userID)
{

    if (password_verify($userPassword, $dbPassword)) {

        createToken($userID);

    } else {

        sendAnswer('Invalid password.', 0, 0);

    }

}

// Generate session token
function createToken($userID)
{

    require('config.php');

    $token = generateRandomString(42);

    $sql = "INSERT INTO session (User_ID, Token) VALUES (:User_ID, :Token)";

    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute(array('User_ID' => $userID, 'Token' => $token));

    if ($erfolg) {

        sendAnswer('Session started.', $userID, $token);

    } else {

        print_r($erfolg);
        sendAnswer('Database error.' . $erfolg, 0, 0);

    }
    ;

}

// Random string generation for the token
function generateRandomString($length)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

// Display login answer
function sendAnswer($nachricht, $userID, $token){

    $answer = [$nachricht, $userID, $token];

    $answer = json_encode($answer);

    print($answer);

}