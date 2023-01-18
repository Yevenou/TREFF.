<?php

// Recall config file
require('config.php');
require_once('authorization.php');

// userid must be named!
$user = $_POST["user"];

// Define form variables
$titel = $_POST["titel"];
$datum = $_POST["datum"];
$adresse = $_POST["adresse"];
$stadt = $_POST["stadt"];
$beschreibung = $_POST["beschreibung"];
$bild = $_POST["bild"];

$hashtags = json_decode($_POST['hashtags']);

// Insert form data into user database
$sql = "INSERT INTO activity (titel, datum, adresse, stadt, beschreibung, bild, user) VALUES (:Titel, :Datum, :Adresse, :Stadt, :Beschreibung,:Bild, :User)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Titel' => $titel, 'Datum' =>$datum, 'Adresse' => $adresse, 'Stadt' => $stadt, 'Beschreibung' => $beschreibung, 'Bild' => $bild, 'User' => $user));

// Validation logic
if ($erfolg) {

    $letzteID = $pdo->lastInsertId();

    insertHashtags($hashtags, $letzteID);

} else {

    print_r($erfolg);
};

function insertHashtags($hashtags, $letzteID)
{

    require('config.php');

    // und wenn überhaupt Hashtags angeklickt wurden
    if (sizeof($hashtags) > 0) {

        $sql = "INSERT INTO activity_has_hashtag (activity_id, hashtag_id) VALUES (:activity_id, :hashtag_id)";

        $stmt = $pdo->prepare($sql);

        foreach ($hashtags as $hashtag) {

            $erfolg = $stmt->execute(array('activity_id' => $letzteID, 'hashtag_id' => $hashtag));
        }

        if ($erfolg) {

            print_r("Dein Inserat wurde mit hashtags erstellt.");
        } else {

            // gib die Fehlermeldung aus
            print_r($erfolg);
        }
    } else {

        print_r("Dein Inserat wurde ohne Hashtags erstellt.");
    }
}