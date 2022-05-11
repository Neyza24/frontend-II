
/* function modoOscuro(){
    let body = document.querySelector('body');
    body.classList.toggle('dark')

    const titulo = document.querySelector('h1');
    titulo.classList.toggle('tituloOscuro');

    let items = document.querySelectorAll('.item');
    items.forEach( item => item.classList.toggle('itemOscuro'));

    let subtitulo = document.querySelectorAll('h2,p');
    subtitulo.forEach( elemento => elemento.classList.add('descripcionOscuro'));

    let btn = document.querySelector('button');
    btn.classList.toggle('btnLight');
}

modoOscuro(); */


function modoOscuro() {
    const body = document.querySelector('body');
    const title = document.querySelector('h1');
    const description = document.querySelectorAll('h2, p');
    const items = document.querySelectorAll('.item');
    const btn = document.querySelector('button');

    body.classList.toggle('dark');
    title.classList.toggle('tituloOscuro');
    description.forEach(p => p.classList.toggle('descripcionOscuro'));
    items.forEach(item => item.classList.toggle('itemOscuro'));
    btn.classList.toggle('btnLight');
}
