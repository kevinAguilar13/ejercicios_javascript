/*2. Validación de acceso:
Solicita usuario, contraseña y rol (admin, editor, visitante). Verifica si las credenciales
son válidas y muestra los permisos disponibles según el rol. Usa múltiples condicionales
y lógica anidada.*/

// VALIDACIÓN DE ACCESO

let usuario = prompt("Ingrese su usuario:");
let contraseña = prompt("Ingrese su contraseña:");
let rol = prompt("Ingrese su rol (admin, editor, visitante):");

// Datos válidos
let usuarioCorrecto = "kevin";
let contraseñaCorrecta = "12345";

// Validación principal
if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
    console.log("Credenciales válidas");
    // Validación del rol
    if (rol === "admin") {
        console.log("Bienvenido Administrador");
        console.log("Permisos:");
        console.log("- Crear usuarios");
        console.log("- Editar información");
        console.log("- Eliminar datos");
    } else if (rol === "editor") {
        console.log("Bienvenido Editor");
        console.log("Permisos:");
        console.log("- Editar contenido");
        console.log("- Publicar información");
    } else if (rol === "visitante") {
        console.log("Bienvenido Visitante");
        console.log("Permisos:");
        console.log("- Solo lectura");
    } else {
        console.log("Rol no válido");
    }
} else {
    console.log("Usuario o contraseña incorrectos");
}