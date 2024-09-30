let numero = prompt("Introduce un número entero: ");
numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, introduce un número entero válido");
} else {
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`)
    } else {
        alert(`El número ${numero} es impar.`)
    }
}