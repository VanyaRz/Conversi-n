let continuar = 1; 

while (continuar === 1) {
    const numero = parseFloat(prompt("Convierte un grado Celsius a grados Fahrenheit y Kelvin\nIngrese un número para la conversión: "));

    if (isNaN(numero)) {
        alert("Error: ingrese un número válido.");
    } else {
        // Celsius a Fahrenheit: (°C × 9/5) + 32
        const fahrenheit = (numero * 9/5) + 32;
        // Celsius a Kelvin: °C + 273.15
        const kelvin = numero + 273.15;

        alert(
            "El grado en Celsius que ingresó es: " + numero + "°C\n" +
            "El resultado de la conversión es: " + fahrenheit.toFixed(2) + "°F y " + kelvin.toFixed(2) + "K"
        );
    }

    const respuesta = prompt("¿Desea hacer otra conversión? (1 = sí, 0 = no): ");
    continuar = parseInt(respuesta);
}

alert("!Gracias por usar el convertidor de grados Celsius a Fahrenheit y Kelvin. ¡Hasta luego!");



