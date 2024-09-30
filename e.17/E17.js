let contadorMayorEdad = 0;

for (let i = 0; i < 5; i++) {
    let edad = prompt("Introduce tu edad: ");
    edad = Number(edad);

    if (!isNaN(edad) && edad >= 0) {
        if (edad >= 18) {
            contadorMayorEdad++;
        }
    } else {
        alert("Error: Introduce una edad válida");
        i--;
    }
}

alert(`Has introducido una edad mayor o igual a 18 ${contadorMayorEdad} veces`)
