const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
  },
  {
    id: "y123",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
  },
  {
    id: "z123",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
  },
  {
    id: "f123",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
  },
  {
    id: "a123",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
  },
  {
    id: "p123",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
  }
];

/*------------------------Capturando #nombreUsuario de etiqueta h2 ----------------------*/
const usuario = document.querySelector('#nombreUsuario');

//-----------------Obteniendo el nombre del usuario con prompt()------------------------//
/*function obtenerUsuario() {
  const promtName = prompt('Ingrese su nombre de usuario: ');
  usuario.innerText = promtName;
}
obtenerUsuario();
*/

//-----------------Obteniendo el nombre del usuario con prompt() utilizando arrow function----------------//
//Utilizar arrow fucntion nos previene de tener ue invocar una función si aún no se ha declarado la variable, para app robustas nos viene bien manejar de esta forma
const obtenerUsuario = () => {
  const promtName = prompt('Ingrese su nombre de usuario: ');
  usuario.innerText = promtName;
}
obtenerUsuario();



/* -------------------------------------------------------------------------- */
/*                  FUNCION: renderizar tarjetas del almbumes                 */
/* -------------------------------------------------------------------------- */
const covers = document.querySelector(".covers")

function renderizarAlbumes() {

  covers.innerHTML = ''

  //con map vamos a recorrer el objeto albumesFamosos nos retorna otro array modificado respecto del que le pasamos
  albumesFamosos.map( album => {
    //
     return covers.innerHTML += 
     ` 
     <li data-id="${album.id}">
         <img src="${album.imagen}" alt="${album.nombre}" />
         <p> ${album.nombre} </p>
         <i onclick="toggleHeart('${album.id}')" class=" fa fa-heart ${album.like ? "favorito" : ""} "> </i> 
     </li>
     `
  })

}

//La invocamos para ques eejecute
renderizarAlbumes()


/* -------------------------------------------------------------------------- */
/*                          FUNCION: marcar favorito                          */
/* -------------------------------------------------------------------------- */


function toggleHeart(identificador) {
  albumesFamosos.forEach( album => {
    if(album.id === identificador) {
      album.like = !album.like
      console.log(album.like)
    }
  })
  renderizarAlbumes()
}