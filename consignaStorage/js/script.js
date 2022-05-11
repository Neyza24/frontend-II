window.addEventListener("load", () => {
    //---------------------Capturando elementos-------------------------------------//
    const formulario = document.forms[0];
    const inputComentario = document.getElementById("comentario");
    const comentariosUsuario = document.querySelector('.comentarios');
    
    let comentariosAlmacenados = [];
    let historialComentarios = obtenerComentariosRealizados();
    
    //-----------------Guardando los comentarios------------------------------------//
    function guardarComentario(comentarioIngresado) {
        historialComentarios.push(comentarioIngresado);
        localStorage.setItem('comentariosRealizados', JSON.stringify(historialComentarios));
    };
    
    //---------------------Obtenemos los comentarios--------------------------------//
    function obtenerComentariosRealizados() {
        comentariosAlmacenados = JSON.parse(localStorage.getItem('comentariosRealizados'));
        return !comentariosAlmacenados ? [] : comentariosAlmacenados;
    };
    
    //---------------------Renderizando los comentarios-----------------------------//
    function renderizarComentarios() {
        comentariosUsuario.innerHTML = ""
    
        comentariosAlmacenados?.map( comment => {
            comentariosUsuario.innerHTML += `<p>${comment}</p>`;
        }) 
    
        /* inputComentario.value = ""; */
    };
    
    //--------------------------Evento submit----------------------------------------//
    formulario.addEventListener('submit', e => {
        e.preventDefault();
    
        guardarComentario(inputComentario.value);
        obtenerComentariosRealizados();
        renderizarComentarios();
    });
    
        obtenerComentariosRealizados();
        renderizarComentarios();

        formulario.reset();
    });

