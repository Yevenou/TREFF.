// ACTIVITY.JS

// set variables
var activityID;
var hashtags = [];

// run functions stated in the document
getUserActivity();
getAllHashtags();

// function to create a new activity in the database
function newActivity(){

    // get values from the form
    let titel = document.querySelector("#titel").value;
    let datum = document.querySelector("#datum").value;
    let adresse = document.querySelector("#adresse").value;
    let stadt = document.querySelector("#stadt").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let bild = document.querySelector("#bild").value;
    
    // put values in the formData to send to the server
    let formData = new FormData();
    formData.append('titel', titel);
    formData.append('datum', datum);
    formData.append('adresse', adresse);
    formData.append('stadt', stadt);
    formData.append('beschreibung', beschreibung);
    formData.append('bild', bild);
    
    formData.append('hashtags', JSON.stringify(hashtags));

    // define local storage items in variables
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    formData.append('user', userID);

    // Fetch PHP
    fetch("https://581695-1.web.fhgr.ch/php/newActivity.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

            document.querySelector('#nachricht').innerHTML = data;

        })

}

function getUserActivity() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://581695-1.web.fhgr.ch/php/getUserActivity.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            console.log(data);

            // falls es noch keine Activity zu diesem User gibt

            if (data.length == 0) {

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "Yeah! Du hast dich für folgende Treffen entschieden. Treff wünscht dir und deinen Mitteilnehmer*innen viel Spass!"

                // zeige den korrekten Button an
                document.querySelector('#button-neue').classList.remove("hidden");

                // falls es bereits eine Activity zu diesem User gibt

            } else {

                // speichere die Activity ID in der globalen variable
                // diese brauchen wir später zum aktualisieren und löschen der Activity
                ActivityID = data[0].ID;

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "Hier kannst du deine Activity bearbeiten:"

                // zeige den korrekten Button an
                document.querySelector('#button-aktualisieren').classList.remove("hidden");
                document.querySelector('#button-loeschen').classList.remove("hidden");

                // fülle das Formular mit den Werten aus der DB aus
                document.querySelector('#titel').value = data[0].titel;
                document.querySelector('#datum').value = data[0].datum;
                document.querySelector('#adresse').value = data[0].adresse;
                document.querySelector('#stadt').value = data[0].stadt;
                document.querySelector('#beschreibung').value = data[0].beschreibung;
                document.querySelector('#bild').value = data[0].bild;
                document.querySelector('#bild-vorschau').src = data[0].bild;

                // färbe die Hashtags dieser Activity korrekt ein
                getHashtagsFromActivity(activityID);

            }
        })
}

function editActivity() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    // Formulardaten in Body übertragen
    let titel = document.querySelector("#titel").value;
    let datum = document.querySelector("#datum").value;
    let adresse = document.querySelector("#adresse").value;
    let stadt = document.querySelector("#stadt").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let bild = document.querySelector("#bild").value;

    let jsonHashtags = JSON.stringify(hashtags);

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('titel', titel);
    formData.append('datum', datum);
    formData.append('adresse', adresse);
    formData.append('stadt', stadt);
    formData.append('beschreibung', beschreibung);
    formData.append('bild', bild);

    formData.append('hashtags', jsonHashtags);

    formData.append('activityID', activityID);

    fetch("https://581695-1.web.fhgr.ch/php/editActivity.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            // zeige die Nachricht an
            document.querySelector('#nachricht').innerHTML = data;

        })
}

function deleteActivity() {
    console.log("deleteactivity gestartet");

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('activityID', activityID);

    fetch("https://581695-1.web.fhgr.ch/php/deleteActivity.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            console.log(data);
            document.querySelector('#nachricht').innerHTML = data;

            // button aktualisieren
            document.querySelector('#button-neue').classList.remove("hidden");
            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");

            // Formularfelder leeren
            document.querySelector('#titel').value = "";
            document.querySelector('#datum').value = "";
            document.querySelector('#adresse').value = "";
            document.querySelector('#stadt').value = "";
            document.querySelector('#beschreibung').value = "";
            document.querySelector('#bild').value = "";

            document.querySelector('#bild-vorschau').src = "";

            document.querySelector('.hashtag').style = "Color: black;"

            // Variablen leeren
            activityID = "";

        })
};

// hashtags

function getAllHashtags() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    fetch("https://581695-1.web.fhgr.ch/php/getAllHashtags.php",
        {
            body: "",
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            data.forEach(hashtag => {

                // schreibe Hashtags ins HTML
                let dieserHashtag = document.createElement("div");

                dieserHashtag.innerHTML = " <p onclick='addHashtag(" + hashtag.ID + ")' id='" + hashtag.ID + "' class='hashtag'> #" + hashtag.hashtag + "</p> ";

                dieserHashtag.style = 'margin-right: 10px; cursor: pointer;';
                document.getElementById("hashtags").appendChild(dieserHashtag);

            });

        })
}

function addHashtag(id) {

    // Prüfe, ob hashtag bereits im Array ist 
    if (hashtags.indexOf(id) == -1) {

        document.getElementById(id).style = "Color: #2a3d91;"

        hashtags.push(id);

    } else {

        document.getElementById(id).style = "Color: white;"

        hashtags.splice(hashtags.indexOf(id), 1);

    }

}

function getHashtagsFromActivity(id) {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('activityID', id);

    fetch("https://581695-1.web.fhgr.ch/php/getHashtagsFromActivity.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            if (data) {

                data.forEach(hashtag => {

                    // färbe die hashtags ein
                    document.getElementById(hashtag.ID).style = "color: Blue;";

                    // pushe die hashtags in die globale variable
                    hashtags.push(parseInt(hashtag.ID));

                });

            }

        })

}
