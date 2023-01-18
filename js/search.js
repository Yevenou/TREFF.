// SEARCH.JS

var activityID;
var hashtags = [];

getAllHashtags();

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

        document.getElementById(id).style = "Color: #febd59;"

        hashtags.push(id);

    } else {

        document.getElementById(id).style = "Color: white;"

        hashtags.splice(hashtags.indexOf(id), 1);

    }

}


function searchActivity() {

    forgetActivities()

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    

    let jsonHashtags = JSON.stringify(hashtags);
    let stringHashtags = jsonHashtags.slice(1, -1);


    let  array = stringHashtags.split(",");
    let sqlHashtags = array.join(" and ");
    console.log(sqlHashtags);
    


    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('hashtags', sqlHashtags);

    fetch("https://581695-1.web.fhgr.ch/php/searchActivity.php",
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

            showActivities(data);

        });
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

        });

}

function forgetActivities() {

    let section = document.getElementById("list-activity");
    let divs = section.getElementsByTagName("div");
    while (divs.length > 0) {
        divs[0].parentNode.removeChild(divs[0]);
    }

}