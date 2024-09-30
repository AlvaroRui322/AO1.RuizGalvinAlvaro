let digit;

do {
    digit = prompt("Introduce un número : ");
    if (isNaN(digit) || digit.trim() === " ") {
        alert("Error: Introduce un número válido.");
    }
} while (isNaN(digit) || digit === "");

digit = Number(digit);
alert(`Has introducido el digito ${digit}`);