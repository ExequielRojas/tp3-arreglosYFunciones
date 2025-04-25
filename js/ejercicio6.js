/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

-La fórmula del perímetro  es p = 2*(a +b) 
 */


function formulaRectangulo(lado1, lado2){
    return 2*lado1 + 2*lado2;
}

let lado1 = parseInt(prompt("Ingrese el valor del lado {a} del rectangulo"))
let lado2 = parseInt(prompt("Ingrese el valor del lado {b} del rectangulo"))

if(isNaN(lado1) || isNaN(lado2) || lado1 <= 0 || lado2 <= 0){
    document.writeln("Por favor, ingrese valores validos y mayores que cero")
} else {
    let perimetro = formulaRectangulo(lado1, lado2);
    document.writeln(`<p>El perímetro del rectángulo es: ${perimetro}</p>`)
}