/*
Sistema de clasificación de rendimiento:
Solicita al usuario su nota (0-20) y su asistencia (%). Si la nota es mayor o igual a 11 y
la asistencia es mayor o igual al 70%, se aprueba. De lo contrario, se desaprueba.
Además, otorga menciones especiales para notas mayores a 17 con asistencia completa.
*/
// Compatibilidad para Node.js: define prompt si no está definido (entorno del navegador)
if (typeof prompt === 'undefined') {
  const fs = require('fs');
  globalThis.prompt = function(message) {
    process.stdout.write(message);
    const buffer = Buffer.alloc(1024);
    let bytesRead = 0;
    try {
      bytesRead = fs.readSync(0, buffer, 0, 1024, null);
    } catch (e) {
      return "";
    }
    return buffer.toString('utf8', 0, bytesRead).replace(/\r?\n$/, '');
  };
}

let nota = 18;
let asistencia = 80;


if (nota >= 11 && asistencia >= 70) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}


if (nota > 17 && asistencia === 100) {
  console.log("Mención especial");
}