<?php

// Recall config file
require('config.php');

// Define form variables
$email = $_POST["email"];
$username = $_POST["username"];
$password = $_POST["password"];

// Encrypt passwords
$password = password_hash($password, PASSWORD_DEFAULT);

// Insert form data into user database
$sql = "INSERT INTO user (name, email, password) VALUES (:Name, :Email, :Password)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Name' => $username, 'Email' => $email, 'Password' => $password));

// Validation logic
if ($erfolg) {

    print_r('Registrierung erfolgreich.');
} else {

    print_r($erfolg);
};