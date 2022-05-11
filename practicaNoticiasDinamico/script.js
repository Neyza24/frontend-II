//Array de objetos para crear dinamicamente las cards de noticias
const noticias = [
    {
        titulo:"2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
        descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto...",
        fecha:"07/06/21",
        tipoNacional: true
 
    },
    {
        titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
        imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí...",
        fecha:"02/06/21",
        tipoNacional: false
 
    },
    {
        titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación...",
        fecha:"01/06/21",
        tipoNacional: true
 
    },
    {
        titulo:"La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
        descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones...",
        fecha:"04/06/21",
        tipoNacional: false
 
    },
    {
        titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam...",
        fecha:"07/06/21",
        tipoNacional: true
 
    },
    {
        titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam...",
        fecha:"07/06/21",
        tipoNacional: true
 
    },
];


//Capturando el elemento div con class contenedor, para una vez creados los elementos con js los agreguemos
const contenedor = document.querySelector('.contenedor');
const breadcrumbs= document.querySelectorAll('li>a.breadcrumbs');
const title = document.querySelector('h1');
console.log(title);

const renderizarCards = (noticias) => {
    contenedor.innerHTML = "";

    noticias.forEach(noticia => {
        return contenedor.innerHTML += `
        <article class="item">
        <img src="${noticia.imgUrl}" alt="${noticia.titulo}"/>
        <p class="fecha">${noticia.fecha}</p>
        <h2>${noticia.titulo}</h2>
        <p>${noticia.descripcion}</p>
        <a href="#">Leer más</a>
        </article>
        `
    })  
}
renderizarCards(noticias);

function filterTipoNoticias(event){ 
    let componentHtml = event.target;
    let noticiasFiltrads = noticias;
    if(componentHtml.textContent == "Nacionales"){
        noticiasFiltrads = noticias.filter( noticia => noticia.tipoNacional == true );
        title.innerHTML = 'NOTICIAS NACIONALES';
    }else if(componentHtml.textContent == "Internacionales"){
        noticiasFiltrads = noticias.filter( noticia => noticia.tipoNacional == false);
        title.innerHTML = 'NOTICIAS INTERNACIONALES';
    } 
    console.log(noticiasFiltrads);
    renderizarCards(noticiasFiltrads);
}

function activeDesavtiveMenuItem(event){
    let componentHtml = event.target;
    breadcrumbs.forEach(breadcrumb => {
        breadcrumb.classList.remove("active");
    });
    componentHtml.classList.toggle("active");
}



breadcrumbs.forEach(breadcrumb => {
    breadcrumb.addEventListener("click", filterTipoNoticias);
    breadcrumb.addEventListener("click", activeDesavtiveMenuItem);
});


