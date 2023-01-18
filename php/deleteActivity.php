<?php

require_once('config.php');
require_once('authorization.php');

$userID = $_POST["userID"];
$activityID = $_POST["activityID"];

try {
    echo $activityID;

    $sql = "DELETE FROM activity WHERE user=?";
    $stmt = $pdo->prepare($sql);


    $erfolg = $stmt->execute([$userID]);

    echo $stmt->rowCount() . " records Updated successfully";

} catch(Exception $e) {


    
    echo $e->getMessage();

}

