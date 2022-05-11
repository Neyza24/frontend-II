window.addEventListener('load', function () {
 
    //Selecciono los nodos
    const valor = document.querySelector("#valor")
    const inicio = document.querySelector("#iniciar")
    const restablecer = document.querySelector('#restablecer')
    const reiniciar = document.querySelector("#reiniciar")
    const acelerar = document.querySelector("#acelerar")
    const pausa = document.querySelector('#pausa')

    //inicializo el valor del cronometro
    let n = 0;
    let velocidad = 1000;
    let intervalo = setInterval(() => {
        valor.innerText = n++
    }, velocidad);

    inicio.addEventListener('click', () => {
        clearInterval(intervalo)
        intervalo = setInterval(() => {
            valor.innerText = n++
        }, 1000);
    })

    restablecer.addEventListener('click', () => {
        n = 0;
        valor.innerText = n;
        clearInterval(intervalo)
    })

    reiniciar.addEventListener('click', () => {
        n = 0;
        clearInterval(intervalo)
        intervalo = setInterval(() => {
            valor.innerText = n++
        }, 1000);
    })

    pausa.addEventListener('click', () => {
        clearInterval(intervalo)
    })

    acelerar.addEventListener('click', () => {
        clearInterval(intervalo)
        velocidad = 500
        intervalo = setInterval(() => {
            valor.innerText = n++
        }, velocidad);
    })

});


