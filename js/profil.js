//PROFIL.JS

//run functions
getUser();
getUserProfile();

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

function logout(){
    localStorage.clear();
    window.location.href = '/login.html';
}