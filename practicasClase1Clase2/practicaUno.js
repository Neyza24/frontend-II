/* 
Realizar un script que permita sumar un array de números consecutivamente, de forma que se sume el primer número con el segundo y lo imprima por consola. 
Luego, tenemos que  tomar este resultado y sumarle el tercer numero, y asi hasta terminar de recorrer el array:
*/

const arrayEntrada = [1, 2, 4, 8];

function sumaConsecutiva(coleccion) {
    let suma = 0;
    coleccion.forEach(numero => {
        suma += numero;
        console.log("La suma en esta vuelta es " + suma);
    })
}

sumaConsecutiva(arrayEntrada);