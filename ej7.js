/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

function tablaMultiplicacion(numero) {
  console.log("tabla del " + numero);

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + "*" + i + "=" + resultado);
  }
}
let numero = parseInt(prompt("ingresa un numero"));
if (!isNaN(numero)) {
  tablaMultiplicacion(numero);
} else {
  console.log("Ingresa un numero vlaido");
}
