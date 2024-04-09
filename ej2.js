/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
Output:*/

function ciudadesDelMundo() {
  let ciudades = [];

  while (true) {
    let ciudad = prompt("Ingresa una ciudad");
    if (ciudad === null) {
      break;
    }
    ciudades.push(ciudad);
  }
  console.log("el arreglo es: ", ciudades);
  console.log("la longitud es: ", ciudades.length);
  document.write("<p>Primera posición: " + ciudades[0] + "</p>");
  document.write("<p>Tercera posición: " + ciudades[2] + "</p>");
  document.write(
    "<p>Última posición: " + ciudades[ciudades.length - 1] + "</p>"
  );
  ciudades.push("París");
  console.log("Elemento en la segunda posición: ", ciudades[1]);
  ciudades[1] = "Barcelona";

  console.log("el nuevo arreglo es: ", ciudades);
}

ciudadesDelMundo()