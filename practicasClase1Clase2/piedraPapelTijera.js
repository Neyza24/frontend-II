/* Programaremos un pequeño juego interactivo de piedra, papel o tijera. El usuario podrá elegir entre una de las 3 opciones y la computadora elegirá al azar otra de las 3 opciones, 
entonces, se mostrará si ganó o perdió. Para realizar esta actividad recordemos las reglas de este juego:
Piedra gana contra tijera. Tijera gana contra papel. Papel gana contra piedra
*/


let urlConsiga = 'https://docs.google.com/document/d/1ZnZluxnZcGuskLr8HOYOjdbjf9BY7UE_/edit'

let resultado = 'Todavia no se calculo';
let maxIntentos = 3;

let puntajeJugador = 0;
let puntajeBot = 0;

for(i = 3; i > 0; i--) {
    let opcionCompu = parseInt((Math.random()*3+1));
    let opcionUsuario = parseInt(prompt('Elija una de las siguientes opciones: (1)Piedra, (2)Papel, (3)Tijera'));

    if(opcionUsuario > 0 && opcionUsuario < 4) {
        if((opcionCompu == 1 && opcionUsuario == 3 ) || (opcionCompu == 3 && opcionUsuario == 2) || (opcionCompu == 2 && opcionUsuario == 1) ) {
            resultado = alert('Gano bot');
            puntajeBot++;
            console.log(puntajeBot);
        }else if((opcionUsuario == 1 && opcionCompu == 3 ) || (opcionUsuario == 3 && opcionCompu == 2) || (opcionUsuario == 2 && opcionCompu == 1) ) {
            resultado = alert('Ganaste !!!');
            puntajeJugador++;
            console.log(puntajeJugador);
        }else {
            resultado = alert('Es un empate');
        }
    }else{
            alert('Ingresaste una opcion invalida')
    }
}






