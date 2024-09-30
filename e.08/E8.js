let edad = prompt("Escribe tu edad : ");
edad = Number(edad)


if (edad <= 0) {
    console.log("No puedes tener 0 o menos años")
} else if (edad > 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

if ((edad > 18) && (edad < 25)) {
    console.log("Eres mayor de edad pero todavía joven")
}