/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58 */

function calcularPerimetro(ladoa, ladob) {
  if (isNaN(ladoa) || isNaN(ladob)) {
    return "Ingresa numeros, no letras";
  }
  let perimetro = 2 * (ladoa + ladob);
  return perimetro;
}
let ladoa = parseFloat(prompt("Ingresa el valor del lado a"));
let ladob = parseFloat(prompt("Ingresa el valor del lado b"));
let resultado = calcularPerimetro(ladoa, ladob);
alert("el perimetro es " + resultado);
