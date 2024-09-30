let numero = 3;
let numero2 = 7;
let resultado;

resultado = numero < numero2;
console.log(`${numero} < ${numero2} -> ${resultado}`);

resultado = numero > numero2;
console.log(`${numero} > ${numero2} -> ${resultado}`);

resultado = numero == numero2;
console.log(`${numero} == ${numero2} -> ${resultado}`);

resultado = numero != numero2;
console.log(`${numero} != ${numero2} -> ${resultado}`);

resultado = (numero < 5) && (numero2 > 5);
console.log(`(${numero} < 5) && (${numero2} > 5) -> ${resultado}`);

resultado = (numero > 5) || (numero2 < 10);
console.log(`(${numero} > 5) || (${numero2} < 10) -> ${resultado}`);

resultado = !(numero == numero2);
console.log(`!(${numero} == ${numero2}) -> ${resultado}`);