window.addEventListener("load", () => {
  //------------Capturando los inputs-nombre-telefono y contraseña-------------------//
  const nombreUsuario = document.querySelector("#nombre");
  const contraseniaUsuario = document.querySelector("#pass");
  const telefonoUsuario = document.querySelector("#tel");
  const form = document.querySelector("form");
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const radioButtons = document.querySelectorAll("input[type=radio]");
  const contenedorCheckboxes = document.querySelector("fieldset");

  //--------------Objeto para alamcenar los datos-------------//
  let usuario = {
    nombreCompleto: "",
    contrasenia: "",
    tel: "",
    hobbiesSeleccionados: [],
    nacionalidad: "" 
  };
  
  const span = document.createElement("span");
  const errorNombre = document.getElementById("error-nombre");
  const errorTelefono = document.getElementById("error-telefono");
  const errorContrasenia = document.getElementById("error-contrasenia");

  //----------------------Mensajes de error---------------------------------------------------------//
  let mensajeErrorNombre = "El máximo de caracteres permitidos es 50 y el mínimo es 5";
  let mensajeErrorTelefono = "Ingresa un número de telefono válido";
  let mensajeErrorContrasenia = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico. ";
  let mensajeErrorHobbies = "Solo puede seleccionar como máximo 4 hobbies";


  //--------------Function errorMensajeNombre--------------------------------//
  function mensajeSegunErrorNombre(mensaje) {
      nombreUsuario.classList.add('error'); 
      span.innerText = mensaje;
      errorNombre.appendChild(span);
  }

  //--------------Validar nombre-------------------------------------------//
  function validarNombre(nombre) {
    let nameCompleto = nombre.trim().split(' ', 4);
    let contadorCondiciones = 0;

    !/\d/.test(nombre) ? contadorCondiciones++ : mensajeSegunErrorNombre("* No debe contener números");
            nombre.length <= 50 ? contadorCondiciones++ : mensajeSegunErrorNombre("* Debe contener menos de 50 carácteres");
            nameCompleto.length > 0 ? contadorCondiciones++ : mensajeSegunErrorNombre("* No puede dejar el campo vacio");
            nameCompleto[0].length > 1 ? contadorCondiciones++ : mensajeSegunErrorNombre("* Cada palabra debe contener más de 1 caracter");
            nameCompleto[1].length > 1 ? contadorCondiciones++ : mensajeSegunErrorNombre("* Cada palabra debe contener más de 1 caracter");
        
            if(contadorCondiciones == 5){
                nombreUsuario.classList.remove("error");
                usuario.nombreCompleto = nameCompleto;
            }
  }

  //------------------Agregando al evento la validación de nombre--------------------------//
  nombreUsuario.addEventListener('blur', () => {
    validarNombre(nombreUsuario.value);
  })

  //-------------Validando telefono ingresado por el usuario------------------------//
  telefonoUsuario.addEventListener("change", (telefono) => {
    let regex = "\x2b[0-9]+";
    console.log("as");
    if (telefono.length < 10) {
      usuario.tel = telefonoUsuario.value;
    } else {
      telefonoUsuario.classList.add("error");
      errorTelefono.appendChild(span);
      span.innerText = mensajeErrorTelefono;
    }
  });

  //--------------Validar contraseña---------------------------------//

  //--------------------Validar checkbox------------------------------//
  // Capturar el evento para todos los checkbox's
  // Ejecutar la funcion validarCheckbox
  // capturar el numero de checkbox activos y imprimir mensaje de error cuando son mayor a 4
  function validarCheckbox() {
    let cantidadChecboxActivos = 0;
    for (var hobbie of checkboxes.values()) {
      console.log(hobbie.checked);
      hobbie.checked ? cantidadChecboxActivos++ : null;
      if (cantidadChecboxActivos > 4) {
        // imprimir error y no guardar checkbox
        contenedorCheckboxes.appendChild(span);
        span.innerText = mensajeErrorHobbies;
        break;
      }
      hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null;
    }
  }

  //--------------------Validar radio buttons------------------------//
  function validarRadioButtons() {
    radioButtons.forEach((nacionalidad) => {
      nacionalidad.checked ? (usuario.nacionalidad = nacionalidad.id) : null;
    });
  }

  /* //------------------Capturando y generando eventos y previniendo eventos por default--------//
  nombreUsuario.addEventListener('blur', (evento) => {        
         //Normalizamos el dato//
        
        let nombreCompleto = evento.target.value.trim();
        let nombrePartes = evento.target.value.trim().split(' ', 4);
        //Aplicando condiciones//
        if(nombreCompleto.length >= 50 || (nombreCompleto.length <= 5 && nombreCompleto.length != 0)) {
            nombreUsuario.classList.add('error'); 
            span.innerText = mensajeErrorNombre;
            errorNombre.appendChild(span);
        }else if (nombreCompleto == ""){
            nombreUsuario.classList.add('error'); 
            span.innerText = 'No puede dejar este campo vacío';
            errorNombre.appendChild(span);
        } else {
            usuario.nombreCompleto = nombreCompleto;
            nombreUsuario.classList.remove('error');
            errorNombre.querySelector('span').remove();
        }  
    }) */


  //----------------Aplicando espresiones regulares para validar una constraseña que contemple ciertas caracteristicas-----------------------//
  contraseniaUsuario.addEventListener("change", () => {
    let strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    if (strongRegex.test(contraseniaUsuario.value)) {
      usuario.contrasenia = contraseniaUsuario.value;
    } else {
      contraseniaUsuario.classList.add("error");
      errorContrasenia.appendChild(span);
      span.innerText = mensajeErrorContrasenia;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validarTelefono(telefonoUsuario.value);

    validarCheckbox();
    validarRadioButtons();

    console.log(usuario);
  });

  //---------Método si los campos son llenados correctamente--------------------------//
  /*     const validaOk = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add('success');
    
    } */

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", validarCheckbox);
  }
});


let urlConsigna = 'https://docs.google.com/document/d/1Q9TwzvAxLCZAaX4VH7SXSqwSVW9lKF8pFf49A024-Kc/edit';
let urlExpresionesRegulares = 'https://lenguajejs.com/javascript/caracteristicas/expresiones-regulares/';
let videoFReguares = 'https://www.youtube.com/watch?v=aPkBloR9MEI';