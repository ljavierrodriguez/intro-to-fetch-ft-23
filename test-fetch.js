/* Funcion Fetch */
/* 

/user/1
/user/1/edit
/user/1/delete
uri = https://playground.4geeks.com/apis/fake/sound/songs
opciones = {
    method: 'GET', // GET, POST, PUT, DELETE
    body: "", // POST, PUT
    headers: {
        'my-viable': 'hola',
        'Content-Type': 'application/json', // mime text/html, text/css, text/html
    }
}

fetch(uri, opciones)
    .then((reponse) => {

        reponse.ok
        response.status

        return response.json()

    })
    .then((data) => {

    })



*/
function consultarDatos() {
    fetch('https://playground.4geeks.com/apis/fake/sound/songs')
        .then((response) => {

            return response.json()
        })
        .then((datos) => {
            console.log(datos)
        })
        .catch((error) => console.log(error))
}

consultarDatos();

console.log("Hola")


function login(username, password) {
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((datosJson) => {
            console.log(datosJson)
        })
}

login('lrodriguez', '123456')