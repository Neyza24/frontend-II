//Obteniendo el contneido del primer li:
//const primerA = document.querySelector('a');
//primerA.style.color = 'cyan';

//Obtniendo el contenido del segundo li:
//const segundoA = document.querySelectorAll('a');
//segundoA[1].style.color = 'cyan';

//--------Capturando elementos--------------------------//
//Obteniendo todos los a:
const enlace = document.querySelectorAll('a');
//console.log(enlace);

//Capturando elementos de etiqueta article:
const cards = document.querySelectorAll('article');


//----------Modificando-----------------------------------//
enlace.forEach(a => {
    a.style.color = 'cyan';
    a.style.textDecoration = 'none';
    a.style.fontWeight = 'Bold';

    //Agregando clases:
    a.classList.add('primer-enlace');
})


//Aplicando condiciones para agregar o quitar clase en elementos de tipo article:
cards.forEach(card => {
    if(card.classList.contains('diferente')){
        card.classList.add('animado');
    }
})

// -----------------Viendo algod eventos-----------------------------------//

function darkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('fondoOscuro');
}

//darkMode();

