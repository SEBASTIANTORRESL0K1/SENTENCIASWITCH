let edad = prompt("Ingresa tu edad:");

while (isNaN(edad) || edad === "" || edad === null) {
  // Mientras la entrada no sea un número válido, sigue pidiendo la edad.
  edad = prompt("Por favor, ingresa una edad válida:");
}

edad = parseInt(edad);

switch (true) {
  case edad < 18:
    document.write("Eres menor de edad.");
    break;
  case edad >= 18 && edad < 65:
   document.write("Eres mayor de edad.");
    break;
  case edad >= 65:
   document.write("Eres de la tercera edad.");
    break;
  default:
    document.write("Edad no válida.");
}
