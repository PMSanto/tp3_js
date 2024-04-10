/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

function infoTexto(texto) {
    let textoMayusculas = texto.toUpperCase();
    let textoMinusculas = texto.toLowerCase();
  if (texto === textoMinusculas) {
    console.log("El texto solo contiene minusculas");
  } else if (texto === textoMayusculas) {
    console.log("El texto contiene solo mayusculas");
  } else {
    console.log("El texto contiene mayusculas y minuculas");
  }
}
 let texto1 = "Esto es un texto"
 let texto2 = "HOLA"
 let texto3 = "hey"
 infoTexto(texto3)