const formulario = document.forms[0];
const inputComentario = document.getElementById("comentario");
const comentariosRealizados = document.querySelector('.comentarios');

formulario.addEventListener('submit', e => {
    e.preventDefault();


    guardarComentario(inputComentario.value);
    mostrarComentario();


})

function guardarComentario(comentario) {
    localStorage.setItem('comentariosRealizados', JSON.stringify(historialComentarios));

}