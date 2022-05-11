// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

//con esto traemos el valor en este caso del token jwt si es que lo hay, si no hay trae null//
const token = localStorage.getItem("jwt");

//función para valdiar si existe un token para que lo dejemos pasar a la pantalla de tareas, caso contrarios se hace un redirect a la pantalla de login//
if (!token) {
  location.replace("./index.html");
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const formulario = document.querySelector("form");
  const btnCerrarSesion = document.querySelector("#closeApp");
  const userName = document.querySelector(".user-info p");
  const tareasPendientes = document.querySelector(".tareas-pendientes");
  const tareasTerminadas = document.querySelector(".tareas-terminadas");
  const inputNuevaTarea = document.querySelector("#nuevaTarea");
  const spanCantFinalizadas = document.querySelector('#cantidad-finalizadas');

  const urlBase = "https://ctd-todo-api.herokuapp.com/v1";

  //Ejecutamos el nombre de usuario en párrafo
  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    //Preguntar si desea cerrar sesion y limpiar el local storage si confirma//
    const opcionUsuario = confirm("¿Desea cerrar sesión?");

    if (opcionUsuario) {
      //localStorage.removeItem('jwt'); Limpia algo especifico y para eso le pasamos el nombre//
      localStorage.clear(); //limpia todo del localStorage, por lo cuál no debo preocuparme de ser especifico con el nombre de lo que se quiere borrar//
      location.replace("./index.html"); //no estamos guardando el historial, por lo cual al hacer volver atrás en el navegador no lo guardaría en el historial donde estuvo anteriormente//
      //location.href = './index.html'; con esto si se guarda en el historial del navegador, al darle atrás no devuelve donde estabamos anteriormente//
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    console.log("Lanzando consulta a la API");

    const configuraciones = {
      method: "GET",
      headers: {
        authorization: JSON.parse(token),
      },
    };

    //Realizamos la petición GETME para obtener un dato del usuario//
    fetch(`${urlBase}/users/getMe`, configuraciones)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        userName.textContent = data.firstName;
      })
      .catch((error) => {
        mostrarPosibleError(error);
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    console.log("consultando listado de tareas por medio de la API");

    const configuraciones = {
      method: "GET",
      headers: {
        authorization: JSON.parse(token),
      },
    };

    //Realizamos la petición a la API para obtener el listado de tareas existentes//
    fetch(`${urlBase}/tasks`, configuraciones)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //Le mando el listado a renderizar tareas//
        renderizarTareas(data);
        botonesCambioEstado();
        botonBorrarTarea();
      })
      .catch((error) => {
        mostrarPosibleError(error);
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Creaando nueva tarea");
    console.log(inputNuevaTarea.value);

    //Creamos la data requerida por la API en el body//
    const payload = {
      description: inputNuevaTarea.value,
      completed: false,
    };

    //Creamos las configuraciones necesarias//
    const configuraciones = {
      method: "POST",
      headers: {
        authorization: JSON.parse(token),
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch(`${urlBase}/tasks`, configuraciones)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //consultamos las tareas para que se pinten nuevamente//
        consultarTareas();
      })
      .catch((error) => {
        mostrarPosibleError(error);
      });

    //limpiamos el form//
    formulario.reset();
  })

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    
    console.log("Pintando tareas");
    //Limpiamos las listas antes de volver a pintar//
    tareasTerminadas.innerHTML = "";
    tareasPendientes.innerHTML = "";

    listado.forEach((tarea) => {
      //Variable intermedia para manipular el día//
      let fecha = new Date(`${tarea.createdAt}`);

      if (tarea.completed) {
        tareasTerminadas.innerHTML += `
        <li class="tarea" data-aos="fade-up">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
                        `
      } else {
        //lo mandamos al listado de tareas sin terminar
        tareasPendientes.innerHTML += `
          <li class="tarea" data-aos="fade-down">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
          </li>
                        `
      }
    });
    
    const itemsTerminados = document.querySelectorAll('.tareas-terminadas li');
    spanCantFinalizadas.innerText = itemsTerminados.length; 


    //Finalizado el recorrido. Ahora le doy funcionalidad a los botones de cambio de estado//
    botonesCambioEstado();
    botonBorrarTarea();
  }

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    console.log("le agregamos funcionaldiad a los botobnes de cambio de estado");

    const btnUpdate = document.querySelectorAll(".change");

    btnUpdate.forEach((boton) => {
      boton.addEventListener("click", function (event) {
        console.log("cambiando estado dela tarea....");
        const idCapturado = event.target.id;

        const payload = {};

        //segun el tipo de boton que fue clickeado, cambiamos el estado de la tarea
        if (event.target.classList.contains('incompleta')) {
          // si está completada, la paso a pendiente
          payload.completed = false;
        } else {
          // sino, está pendiente, la paso a completada
          payload.completed = true;
        }

        //Creamos las configuraciones necesarias//
        const configuraciones = {
          method: "PUT",
          headers: {
            authorization: JSON.parse(token),
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        };

        fetch(`${urlBase}/tasks/${idCapturado}`, configuraciones)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //consultamos las tareas para que se pinten nuevamente//
            consultarTareas();
          })
      })
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
    const btnDelelete = document.querySelectorAll('.borrar');


    btnDelelete.forEach(boton => {
      boton.addEventListener('click', function(event) {

        const idCapturado = event.target.id;

        console.log('Borrando tarea');

        //config fetch//
        const configuraciones = {
          method: 'DELETE',
          headers: {
            authorization: JSON.parse(token),
          }
        }

        //Hacemos la petición DELETE a la API //
        fetch(`${urlBase}/tasks/${idCapturado}`, configuraciones)
        .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //consultamos las tareas para que se pinten nuevamente//
            consultarTareas();
          })
          .catch((error) => {
            mostrarPosibleError(error);
          });

      })
    })
  }
});

/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 7 - funciones extra                    */
/* -------------------------------------------------------------------------- */

function mostrarPosibleError(mensaje) {
  alert(`Hubo un error:${mensaje}`);
}
