window.addEventListener('load', function () {


    /* ---------------------- obtenemos variables globales-con esto obtenemos nodos enteros y ya luego podemos personalizar lo que queremos especificamente ---------------------- */
    const formulario = document.querySelector('form');
    const inputNombre = document.querySelector('#inputNombre');
    const inputApellido = document.querySelector('#inputApellido');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');

    const urlBase = 'https://ctd-todo-api.herokuapp.com/v1';

    
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    formulario.addEventListener('submit', function (event) {
        //Prevenimos el evento por defecto, que sería una petición GET que viaja por la URL//
        event.preventDefault();


        //Preparo la data para crear usuario//
        const usuario = {
            firstName: inputNombre.value,
            lastName: inputApellido.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        console.log(usuario);

        //Creamos configuraciones para enviar en el header de la petición//
        const settings = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-type': 'application/json'
            }
        }

        //Intentamos registrar nuestro usuario//
        realizarRegister(settings);
        
        
    });



    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(configuraciones) {

        //Creamos una consulta a la API con FETCH//
        fetch(`${urlBase}/users`, configuraciones)
        .then(response => response.json())
        .then(data => {
            //Corroboramos que nos lelgo el token//
            if(data.jwt) {
                //Guardamos el token en localstorage//
                localStorage.setItem('jwt', JSON.stringify(data.jwt));

                //Si se creo exitosamente el usuario y se obtuvo el token, redireccionamos al usuario a lapantalla de tareas//
                location.replace('./mis-tareas.html');
            }
            //console.log(data);//
        })
        .catch(error => {
            error = 'Error escuchando la promesa';
            console.log(error);
        })

        
    };


});