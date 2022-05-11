
console.log("Bienvenidos al Banco Digital");

let miPrimeraPromise = new Promise((resolve, reject) => {

    const cuentaBancaria = {
        estado: "activa",
        usuario: "Michael Scott",
        cajaDeAhorros:  200
    };

    setTimeout(function () {

        if (cuentaBancaria.cajaDeAhorros < 1) {
            reject({
                mensaje: "Fondos insuficientes en la cuenta.",
                status: "420"
            });
        } else if (cuentaBancaria.estado != "activa") {
            reject({
                mensaje: "La cuenta no se encuentra activa.",
                status: "421"
            });
        } else {
            resolve({
                mensaje: "La transacción se realizó con éxito.",
                status: "200"
            });
        }

    }, 2500);

});


const cajero = document.querySelector('.bancaMobile')


miPrimeraPromise
.then((respuesta) => {
    cajero.innerHTML = `<h4>${respuesta.mensaje}</h4>`;
    cajero.style.border = '3px solid green';
})
.catch((err) => {
    cajero.innerHTML = `<h4>${err.mensaje}</h4>`
    cajero.style.border = '3px solid red';
    console.log(err);
});

console.log(miPrimeraPromise)

//Consigana Mesa---> Crear una funcion que reciba como parametro un mensaje de error---//
/* function mensajeError(mensaje) {
    if(cuentaBancaria.estado != "activa") {
        mensaje = 'Cuenta inactiva, petición rechazada';
        cajero.style.border = '3px solid red';
    } else if(cuentaBancaria.cajaDeAhorros < 50){
        mensaje = 'Fondos insuficientes en la cuenta';
        cajero.style.border = '3px solid red';
    } else {
        mensaje = "La transacción se realizó con éxito.";
        cajero.style.border = '3px solid green';
    }
} */

/* https://docs.google.com/document/d/1BqHHeexRjfiPIcUyedT8cyEGvQatDGqM/edit */