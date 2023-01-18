// REGISTER.JS

function register (){

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://581695-1.web.fhgr.ch/php/register.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

            document.querySelector('#nachricht').innerHTML = data;

        })
     
}