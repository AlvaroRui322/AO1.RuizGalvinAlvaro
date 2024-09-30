let texto = prompt("Introduce un texto : ");
let arrayTexto = [];
let arrayInvertido;

arrayTexto = texto.split("");
arrayInvertido = arrayTexto.reverse();

if (arrayInvertido == texto) {
    alert("Es un palíndromo");
} else {
    alert("No es palíndromo")
}

