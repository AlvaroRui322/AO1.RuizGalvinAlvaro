// Solicita al usuario un número hasta que sea válido
let digit;

do {
    digit = prompt("Introduce un número : ");
    // Verifica si la entrada no es un número o está vacía
    if (isNaN(digit) || digit.trim() === "") {
        alert("Error: Introduce un número válido.");
    }
} while (isNaN(digit) || digit.trim() === ""); // Repite hasta obtener un número válido

// Convierte la entrada a un número
digit = Number(digit);
// Muestra el número introducido
alert(`Has introducido el digito ${digit}`);