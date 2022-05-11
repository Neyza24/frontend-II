/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');


/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
const body = document.querySelector('body');
const cardHeader = document.querySelector('.card-header');
const spanHeader = document.querySelectorAll('span'); 

const imgPerfil = document.querySelector('.developer');


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresa tu nombre: ');
  datosPersona.edad = prompt('Ingresa tu edad: ');
  datosPersona.ciudad = prompt('Ingresa la ciudad donde vives: ');
  datosPersona.interesPorJs = confirm('¿Te interesa Javascript?')  ? "Si" : "No";
}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  spanHeader[0].textContent = datosPersona.nombre;
  spanHeader[1].textContent = datosPersona.edad;
  spanHeader[2].textContent = datosPersona.ciudad;
  spanHeader[3].textContent = datosPersona.interesPorJs;

}


// Capturando section y div donde van a estar las cards de materias
const divCards = document.getElementById('fila');
//Creando las cards de materias con su contenido

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  divCards.innerHTML = "";

  listado.map( materia => {
    return divCards.innerHTML += `
      <article class="caja">
          <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
          <p class="lenguajes">Lenguaje: ${materia.lenguajes}</p>
          <p class="bimestre">Bimestre: ${materia.bimestre}</p>
      </article>  
    `
  })

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  body.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
//Capturando elemento p con class = 'oculto' y elemento small//
const sobreMi = document.querySelector('.oculto');
const small = document.querySelector('small');

/*---Aplicando condiciones para remover clase 'oculto' para mostrar contenido cuando el usuario realice un eventodeterminado*/
function removerClase() {
  if(sobreMi.classList.contains('oculto')) {
    sobreMi.classList.remove('oculto');
    small.style.visibility = 'hidden';
  } else {
    small.style.visibility = 'visible';
  }
}

/*----------------------Eventos-------------------------------------------------- */
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

/* Aplicando el evento keydown para remover la clase especificada en la anterior función*/
body.addEventListener('keydown', e => {
  if(e.key === "f") {
    removerClase();
  } 
})



/* const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const cambiarTema = document.querySelector('#cambiar-tema');

*/

