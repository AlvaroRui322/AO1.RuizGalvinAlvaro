let numero = prompt("Introduce un número : ")
numero = Number(numero);

let resultado = (numero > 0) ? "El número es positivo" :
                (numero < 0) ? "El número es negativo" :
                "El número es 0";

alert(resultado);