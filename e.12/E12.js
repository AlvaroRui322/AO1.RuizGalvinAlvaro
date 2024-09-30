let contrasena;

do {
    contrasena = prompt("contraseña: ")
    if (contrasena === "1234") {
        alert("Contraseña correcta")
    } else {
        alert("Contraseña incorrecta")
    }    
} while (contrasena !== "1234")