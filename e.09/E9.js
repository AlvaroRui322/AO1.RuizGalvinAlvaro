let edad = prompt("Escribe tu edad : ")
let nacionalidad = prompt("Escribe tu nacionalidad : ")

edad = Number(edad);

if (edad >= 18) {
    if (nacionalidad.toLowerCase() === "española") {
        alert("Puedes votar");
    } else {
        alert("No puedes votar porque no tienes naacionalidad española");
    }
} else {
    alert("No puedes votar porque eres menor de edad")
}