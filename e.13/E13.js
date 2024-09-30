let numero;

do {
    numero = prompt("Introduce un número : ");
    if (isNaN(numero) || numero === "") {
        alert("Error: Introduce un número válido.");
    }
} while (isNaN(numero) || numero === "");

numero = Number(numero);
alert(`Has introducido el numero ${numero}`);