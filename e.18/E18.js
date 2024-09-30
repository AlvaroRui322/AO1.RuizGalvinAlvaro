let numero = prompt("Introduce un número entero de varios dígitos: ");
let suma = 0;

if (!isNaN(numero) && Number.isInteger(Number(numero)) && numero.length > 1) {
    for (let i = 0; i < numero.length; i++) {
        suma += Number(numero[i]);
    }
    alert(`La suma de los dígitos del número ${numero} es ${suma}`);
} else {
    alert ("Error: Por favor, introduce un número entero de varios dígitos.");
}
