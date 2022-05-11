window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const formulario = document.querySelector('form');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');

    const urlBase = 'https://ctd-todo-api.herokuapp.com/v1';

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    formulario.addEventListener('submit', function (event) {
        //Prevenimos los eventos por defecto, para poder personalizar//
        event.preventDefault();

        //Creamos la data requerida en la API heroku para loguear al usuario-esto va en el body de la petición//
        const payload = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        
        //Creamos las configuraciones necesarias para enviar en el header de la petición//
        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        }

        //Intentamos loguear nuestro usuario//
        realizarLogin(settings);

        //Limpiamos los campos del formulario
        formulario.reset();
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(configuraciones) {
        console.log('Lanzando la consulta a la API...')

        //Realizamos una petición a la API con FETCH//
        fetch(`${urlBase}/users/login`, configuraciones)
        .then(response => {
            if(response.ok != true) {
                alert('Alguno de los datos es incorrecto');
            }
            return response.json();
        })
        .then(data => {
            console.log('promesa cumplida');
            //Corrobaramos si la repsuesta de la petición que hicimos es un token y de ser así seguimos con el proceso//
            if(data.jwt) {
                //Guardamos en LocalStorage el objeto con el token//
                localStorage.setItem('jwt', JSON.stringify(data.jwt));
                //Si se obtuvo una respuesta exitosa (nos dvuelve el token), redirigimos al usuario a la pantalla de tareas//
                location.replace('./mis-tareas.html');
            }
        })
        .catch(error => {
            error = 'Error escuchando la promesa';
            console.log(error);
        })
    
        
    };

});