/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

function Paridad(numero) {
  if (numero % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

let numero = 25;
let resultado = Paridad(numero);
console.log(resultado);
