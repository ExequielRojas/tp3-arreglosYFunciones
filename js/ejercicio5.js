function informacionCadena (cadena){
    if(cadena === cadena.toUpperCase()){
        return "La cadena esta formada solo por mayusculas"
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena esta formada solo por minusculas"
    } else {
        return "La cadena esta formada por mayusculas y minusculas"
    }
}

let texto = prompt("Ingrese una cadena de caracteres")

if (texto === null || texto.trim() === ""){
    document.writeln("No se ingreso una cadena valida")
} else {
    const textoFinal = informacionCadena(texto);
    document.writeln(`<p>${textoFinal} / Texto ingresado: ${texto}</p>`);
}