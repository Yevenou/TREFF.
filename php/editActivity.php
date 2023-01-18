<?php

require_once('config.php');
require_once('authorization.php');

$userID = $_POST["userID"];
$titel = $_POST["titel"];
$datum = $_POST["datum"];
$adresse = $_POST["adresse"];
$stadt = $_POST["stadt"];
$beschreibung = $_POST["beschreibung"];

$bild = $_POST["bild"];

$activityID = $_POST["activityID"];

$hashtags = json_decode($_POST['hashtags']);

try {

    $sql = "UPDATE activity SET titel=?, datum=?, adresse=?, stadt=?, beschreibung=?, bild=? WHERE user=?";
    $stmt = $pdo->prepare($sql);

    loescheAlteHashtags($activityID);
    insertNeueHashtags($hashtags, $activityID);

    $erfolg = $stmt->execute([$titel, $datum, $adresse, $stadt, $beschreibung, $bild, $userID]);

    echo $stmt->rowCount() . " records Updated successfully";

} catch(Exception $e) {


    
    echo $e->getMessage();

}


function loescheAlteHashtags($activityID){

    require('config.php');

    // lösche die alten hashtags
    $sql = "DELETE FROM activity_has_hashtag WHERE activity_id = ?";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([$activityID]);

}

function insertNeueHashtags($hashtags, $activityID)
{

    require('config.php');

    // füge die neuen hashtags ein, wenn überhaupt hashtags angeklickt wurden
    if (sizeof($hashtags) > 0) {

        $sql = "INSERT INTO activity_has_hashtag (activity_id, hashtag_id) VALUES (:activity_id, :hashtag_id)";
        $stmt = $pdo->prepare($sql);

        foreach ($hashtags as $hashtag) {

            $erfolg = $stmt->execute(array('activity_id' => $activityID, 'hashtag_id' => $hashtag));
        }

        if ($erfolg) {

            print_r("Dein Inserat wurde aktualisiert.");

        } else {

            // gib die Fehlermeldung aus
            print_r($erfolg);
        }

    } else {

        print_r("Dein Inserat wurde ohne Hashtags aktualisiert.");
    }

}

