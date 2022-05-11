window.addEventListener('load', () => {
    //------------Capturando los inputs-nombre-telefono y contraseña-------------------//
    const nombreUsuario = document.querySelector("#nombre");
    console.log(nombreUsuario.value);
    const contraseniaUsuario = document.querySelector("#pass");
    const telefonoUsuario = document.querySelector("#tel");
    //--------Capturando el form------------------------------//
    const form = document.querySelector("form");
    //-----------Capturando los checkboxes(hobbies) y radio buttons(nacionalidad)--------//
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const radioButtons = document.querySelectorAll("input[type=radio]");

    //--------------Objeto para alamcenar los datos-------------//
    let usuario = {
        nombreCompleto: "",
        contrasenia: "",
        tel: "",
        hobbiesSeleccionados: [],
        nacionalidad: ""
    }

    const span = document.createElement("span");
    const errorNombre = document.getElementById("error-nombre");
    const errorTelefono = document.getElementById("error-telefono");
    const errorContrasenia = document.getElementById("error-contrasenia");
    let mensajeErrorNombre = 'El máximo de caracteres permitidos es 50';
    let mensajeErrorTelefono = 'Ingresa un número de telefono válido';
    let mensajeErrorContrasenia = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico. '
    

    
    
    
    

    //------------Normalizando el campo de nombre completo----------------------------//
    function normalizarDatos (nombre) {
        //Normalizamos el dato//
        let nombreNormalizado = nombre.trim().split(' ', 4);

        //Aplicando condiciones//
        if(nombreNormalizado.length <= 50) {
            usuario.nombreCompleto = nombreNormalizado;
        } else {
            nombreUsuario.classList.add('error');

            errorNombre.appendChild(span);
            span.innerText = mensajeErrorNombre;
        }
    }


    //-------------Validando telefono ingresado por el usuario------------------------//
    function validarTelefono (telefono) {
        console.log(telefono)

        usuario.tel = parseInt(telefono.trim());
        
    }

    //--------------Validar contraseña---------------------------------//


    //--------------------Validar checkbox------------------------------//
    function validarCheckbox () {
        
        checkboxes.forEach( hobbie => {
            hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null;
            /* console.log(hobbie.checked); */
        })
    }


    //--------------------Validar radio buttons------------------------//
    function validarRadioButtons () {
        radioButtons.forEach( nacionalidad => {
            nacionalidad.checked ? usuario.nacionalidad = nacionalidad.id : null;          
        })
    }




    //------------------Capturando y generando eventos y previniendo eventos por default--------//
    nombreUsuario.addEventListener('blur', () => {
        normalizarDatos(nombreUsuario.value);
    })


    //----------------Aplicando espresiones regulares para validar una constraseña que contemple ciertas caracteristicas-----------------------//
    contraseniaUsuario.addEventListener("change", () => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)");

        if(strongRegex.test(contraseniaUsuario.value)) {
            usuario.contrasenia = contraseniaUsuario.value;

        } else {
            contraseniaUsuario.classList.add('error');

            errorContrasenia.appendChild(span);
            span.innerText = mensajeErrorContrasenia;

        }
    })





    form.addEventListener('submit', (e) => {
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





})



/* 

//---------Método para validar campos--------------------------//


//---------Método en caso de que los campos no son llenados o son llenados incorrectamente--------------------------//
const validaFallas = (input, message) => {

}


//---------Método si los campos son llenados correctamente--------------------------//
const validaOk = (input, message) => {

}

//-------------Validar email-------------//
const validaEmail = (email) => {

} */


