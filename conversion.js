let continuar = 1;

while (continuar === 1) {
    const numero = parseFloat(prompt("Ingrese un número en °C:"));

    if (isNaN(numero)) {
        console.log("Error: ingrese un número válido.");
    } else {
        const fahrenheit = (numero * 9/5) + 32;
        const kelvin = numero + 273.15;

        console.log("El grado en Celsius que ingresó es: " + numero + "°C");
        console.log("El resultado de la conversión es: " + fahrenheit.toFixed(2) + "°F y " + kelvin.toFixed(2) + "K");
    }

    const respuesta = prompt("¿Desea hacer otra conversión? (1 = sí, 0 = no): ");
    continuar = parseInt(respuesta);
}

console.log("¡Gracias por usar el convertidor de grados Celsius a Fahrenheit y Kelvin. ¡Hasta luego!");




