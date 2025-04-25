/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. 
 */

function multiplicacion (numero){
    document.writeln("<ul>");
    for (i = 1; i <= 10; i++){
        let resultado = numero * i;
        document.writeln(`<li>${numero} x ${i} = ${resultado}</li>`);
    }
    document.writeln("</ul>");
}

let numero = parseInt(prompt("Ingrese el numero a multiplicar"))

if(numero < 0 || isNaN(numero) || numero > 10){
    document.writeln("Ingrese un numero valido y que sea dentro del rango 1 a 10")
} else {
    multiplicacion(numero);
}