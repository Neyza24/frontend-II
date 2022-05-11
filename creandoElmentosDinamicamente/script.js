//PARTE I  => elementos y atributos dinamicos




//creacion de elementos html
const div = document.createElement("div")
const img = document.createElement("img")
const contenedor = document.querySelector(".contenedor")
const link = document.createElement('a');

//agregamos la clase
div.classList.add("tarjeta")
img.classList.add("imagen")


link.href = 'www.digitalhouse.com';



//nodo padre - metodo -  nodo hijo
img.appendChild(link);
div.appendChild(img)
contenedor.appendChild(div)

// Recorriendo la lista de img
const todasLasImg = document.querySelectorAll("img")

// console.log(todasLasImg)

todasLasImg.forEach(img => {
    const url = prompt("ingrese url")
    img.setAttribute("src", url)
})


//atributos dinamicos I
// img.src = "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg"
// img.alt = "imagen-4"

// atributos dinamicos II
// img.setAttribute("src", "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg")
// img.setAttribute("alt", "imagen-4")

//PARTE II => intro a eventos
const button = document.createElement("button")
const textButton = document.createTextNode("Contador")
const span = document.createElement("span") 

button.appendChild(textButton)

document.body.appendChild(button)

let contador = 0;

function renderizar() {
span.innerText = contador
document.body.appendChild(span)
}
renderizar()

button.addEventListener("click", () => {
        contador++
        renderizar()
        console.log(contador)
        clearInterval(intervalo);
})


let objeto = [{
    nombre: 'Agos',
    apellido: 'Rava'
},
{
nombre: 'Jairo',
apellido: 'Rivera'
}
]




let nombres = document.querySelector('#listaNombres');

objeto.map(persona => {
    const nombre = persona.nombre + " " + persona.apellido;
    nombres.innerHTML += `<p>${nombre}</p>`
})

let intervalo = setInterval(() => {
    span.innerText = contador++
}, 4000)







