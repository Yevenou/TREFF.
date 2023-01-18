// SCRIPT.JS

getUser();
getUserProfile();
getSavedActivities();
getActivities();

function getUser() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://581695-1.web.fhgr.ch/php/getUser.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            document.querySelector("#username").innerHTML = data[0].name;

        })
}

function getUserProfile() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://581695-1.web.fhgr.ch/php/getUserProfile.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                window.location = "/login.html"

            }

        })
        .then((data) => {

            document.querySelector("#username").innerHTML = data[0].name;
            document.querySelector("#email").innerHTML = data[0].email;

        })
}


function getSavedActivities(){

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://581695-1.web.fhgr.ch/php/getSavedActivities.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                window.location = "/login.html"

            }

        })
        .then((data) => {

            showSavedActivities(data);

        })

}

function showSavedActivities(data) {

    data.forEach(activity => {

        let newFormat = new Date(activity.datum).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });

        let activityContainer = document.createElement("div");
        activityContainer.innerHTML =

            '<div class="savedActivity">' +
            '<h3>' + activity.titel + '</h3>' +
            '<p>' + newFormat + '</p>' +
            '📍 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=' + activity.adresse + '">' + activity.adresse + '</a> <br>' +
            '<p> <b> <span id="savedActivity-' + activity.ID + '">  </span> <b> </p>'
            + '</div>';

        document.getElementById("list-saved-activity").appendChild(activityContainer);

        getHashtagsFromSavedActivity(activity.ID);

    });
}

function getActivities(){

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://581695-1.web.fhgr.ch/php/getActivities.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                window.location = "/login.html"

            }

        })
        .then((data) => {

            showActivities(data);

        })

}

function showActivities(data) {

    data.forEach(activity => {


        let newFormat = new Date(activity.datum).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });

        let activityContainer = document.createElement("div");
        activityContainer.innerHTML =

            '<div class="activity">' +
            '<h3>' + activity.titel + '</h3>' +
            '<p>' + newFormat + '</p>' +
            '📍 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=' + activity.adresse + '">' + activity.adresse + '</a> <br>' +
            '<p>' + activity.beschreibung + '</p>' +
            '👤 <a target="_blank" href="mailto:'+ activity.email + '">' + activity.email + '</a>' +
            '<p> <b> <span id="activity-' + activity.ID + '">  </span> <b> </p>' +
            '<button class="joinActivity" onclick="saveActivity(' + activity.ID + ')">Join</button>'
            + '</div>';

        document.getElementById("list-activity").appendChild(activityContainer);

        getHashtagsFromActivity(activity.ID);

    });
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

            if (data.length > 0) {

                data.forEach(element => {

                    document.getElementById("activity-" + id).innerHTML += '#' + element.hashtag + ' ';


                });

            }

        })

}

function getHashtagsFromSavedActivity(id) {

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

            if (data.length > 0) {

                data.forEach(element => {

                    document.getElementById("savedActivity-" + id).innerHTML += '#' + element.hashtag + ' ';


                });

            }

        })

}


//JOIN BUTTON
function saveActivity(activityID) {

    console.log(activityID);

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');
    
    let formData = new FormData();
    formData.append('activityID', activityID);
    formData.append('userID', userID);

    

    fetch("https://581695-1.web.fhgr.ch/php/newSavedActivity.php",
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

            console.log(data);


        })

    
} 
