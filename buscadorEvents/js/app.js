const formulario =  document.forms[0];
const inputBusqueda = document.querySelector('#busqueda');
const busquedasRealizadas = document.querySelector('#busquedas-realizadas');
const deleteBtn = document.querySelector('#delete');

 
//obtenemos la info del local para mas tarde almacenarla en memoria
const historialEnMemoria = obtenerBusquedasRealizadas();
/* -------------------------------------------------------------------------- */
/*                               FUNCIONALIDADES                              */
/* -------------------------------------------------------------------------- */

/* ---------------------- funcion para buscar en Google --------------------- */
function busquedaGoogle(criterioBuscado) {
    location.href = `https://www.google.com/search?q=${criterioBuscado}`
}

/* ------------------ funcion para guardar la info buscada ------------------ */
function guardarBusqueda(busqueda) {
    //agrego a los datos en memoria
    historialEnMemoria.push(busqueda);
    //mando a guardar en localStorage
    localStorage.setItem('busquedasRealizadas', JSON.stringify(historialEnMemoria));
}

/* -------------- funcion para obtener la data del localStorage ------------- */
function obtenerBusquedasRealizadas() {
    //va a la deposito permanente y busca el item busquedasRealizadas
    let historialAlmacenado = JSON.parse(localStorage.getItem('busquedasRealizadas'));

    //chequeamos si exista o no algo, si no habia nada previamente le mandamos un array vacio
    
    if(!historialAlmacenado){
        historialAlmacenado = [];
    }

    busquedasRealizadas.innerHTML = `<p>${historialAlmacenado.join(" - ")}</p>`

    return historialAlmacenado;
}


deleteBtn.addEventListener("click", ()=> {
    localStorage.removeItem('busquedasRealizadas')
    busquedasRealizadas.innerHTML = ``

})
 
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    guardarBusqueda(inputBusqueda.value);

    busquedaGoogle(inputBusqueda.value);

    formulario.reset();
});
