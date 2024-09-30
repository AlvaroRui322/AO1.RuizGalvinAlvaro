let numero = prompt("Introduce un número entero no negativo: ")
numero = Number(numero);
let factorial = 1;

if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    alert(`El factorial de ${numero} es: ${factorial}`)
} else {
    alert("Error: Por favor, introduce un número entero no negativo.")
}
