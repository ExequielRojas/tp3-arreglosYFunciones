/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.

-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

-Añade en última posición la ciudad de París.

-Escribe por pantalla el elemento que ocupa la segunda posición.

-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

 */

const ciudades = []

do {
    const ciudad = prompt(`Ingresa una ciudad`)
    if (ciudad !== null && ciudad.trim() !== "") {
        ciudades.push(ciudad);
      }
} while(confirm(`¿Quieres agregar otra ciudad?`))

    document.writeln(`El arreglo de ciudades tiene ${ciudades.length} elementos`)

    ciudades.push("Paris")
    ciudades[1] = "Barcelona";
    document.writeln(`<ul>`);
    for(i = 0; i < ciudades.length; i++){
        document.writeln(`<li>Elemento posicion ${i}: ${ciudades[i]}</li>`);
    }
    document.writeln(`</ul>`);

    document.writeln(`<p>Primera ciudad: ${ciudades[0]}</p>`);
    document.writeln(`<p>Ciudad en segunda posición: ${ciudades[1]}</p>`);
    document.writeln(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
    document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);