/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. 
 */

function parImpar(numero) {
    const resto = numero % 2;
    let mensaje;

    if (resto === 0) {
      mensaje = `El número ${numero} es par. (${numero} % 2 = ${resto})`;
    } else {
      mensaje = `El número ${numero} es impar. (${numero} % 2 = ${resto})`;
    }

    return mensaje;
  }

  const numeroIngresado = parseInt(prompt("Ingrese un número entero:"));

  const resultado = parImpar(numeroIngresado);
  document.writeln(`<p>${resultado}</p>`);