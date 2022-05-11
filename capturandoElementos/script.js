/*const li = document.querySelectorAll("li");

li[3].style.fontWeight = "bold";
li[3].style.color = "blue";

li[0].classList.add()

function toggleCase() {
    
}
*/

/*----------Practicando template strings-------------------------- */
/*const nombre = 'Mauro';
const miTemplate = `Mi nombre es ${nombre}`;
console.log(miTemplate); // Mi nombre es Mauro
*/


let confirmarCambios = confirm('¿Quieres cambiar el color del título? 🎨')
const btn = document.querySelector('button');
btn.style.padding = '12px 32px'
console.log(btn);

if(confirmarCambios) {
    const titulo = document.querySelector('h1');
    titulo.innerHTML += '  y modificando estilos';
    titulo.style.color = 'cyan';
    titulo.style.fontSize = '54px';
}

btn.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('darkMode');

    const lista = document.querySelectorAll('li');
    lista.forEach(list => list.classList.toggle('darkList'));
    
})










