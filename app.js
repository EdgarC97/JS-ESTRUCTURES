/*
Este bloque de código representa un escenario en el que un personaje toma una decisión basada en varias opciones. 

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite tomar una decisión basada en la entrada del usuario. 
Por ejemplo, podría ser utilizado para un juego de texto interactivo, una encuesta, un cuestionario, etc.

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/

// Mensaje de bienvenida
alert("Bienvenido al viaje de Nombre del personaje");

// Variables globales
let nombreVariable1 = valor; // Descripción de la variable
let nombreVariable2 = valor; // Descripción de la variable
let nombreVariable3 = valor; // Descripción de la variable

// Mensaje inicial
alert ("Mensaje inicial")

// Función principal
function nombreFuncion () {
  // Bucle infinito: se ejecuta hasta que se encuentre un 'return'
  while (true) {
      // Solicitar entrada del usuario
      let choice = prompt("Mensaje de solicitud de entrada del usuario , \n1. Opcion 1 \n2. Opcion 2");
      
      // Procesar la entrada del usuario
      // Switch: estructura de control que permite a una variable ser probada por igualdad en contra de una lista de valores
      switch(choice) {
        // Case: cada caso en el switch representa una opción posible
        case '1':
              // Actualizar variables globales y mostrar mensaje
              nombreVariable1 -= nombreVariable2;
              console.log("Mensaje de actualización de estado");
              // Return: termina la ejecución de la función y especifica un valor para ser devuelto a quien llamó a la función
              return;
        case '2':
              // Actualizar variables globales y mostrar mensaje
              nombreVariable1 -= nombreVariable3;
              console.log("Mensaje de actualización de estado");
              // Return: termina la ejecución de la función y especifica un valor para ser devuelto a quien llamó a la función
              return;
        case '3':
              // Mostrar mensaje
              console.log("Mensaje de actualización de estado");
              // Return: termina la ejecución de la función y especifica un valor para ser devuelto a quien llamó a la función
              return
        // Default: se ejecuta si ninguna de las opciones coincide con el valor de la variable
        default:
              // Mensaje de error
              alert("La opción escogida es inválida. Por favor, elija 1, 2 o 3.");
      }
  }
}

// Llamada a la función principal
nombreFuncion;

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*
Este bloque de código representa un escenario en el que se ajusta el tamaño de una maleta para que cumpla con las restricciones de tamaño de un aeropuerto. 

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite ajustar las dimensiones de un objeto para que cumpla con ciertas restricciones. 

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/

// Definición de las dimensiones de la maleta permitida en el aeropuerto
let airportSuitcase = {
    alto: [valor], // Altura permitida
    largo: [valor], // Largo permitido
    ancho: [valor] // Ancho permitido
  };
  
  // Definición de las dimensiones de la maleta de [nombre del personaje]
  let [nombreVariable] = {
    alto: [valor], // Altura de la maleta de [nombre del personaje]
    largo: [valor], // Largo de la maleta de [nombre del personaje]
    ancho: [valor] // Ancho de la maleta de [nombre del personaje]
  };
  
  // Función para ajustar el tamaño de la maleta
  function adjustSuitcaseSize() {
    // Cálculo del factor de reducción para cada dimensión
    let altoReductionFactor = airportSuitcase.alto / [nombreVariable].alto; // Factor de reducción para la altura
    let largoReductionFactor = airportSuitcase.largo / [nombreVariable].largo; // Factor de reducción para el largo
    let anchoReductionFactor = airportSuitcase.ancho / [nombreVariable].ancho; // Factor de reducción para el ancho
  
    // Encontrar el factor de reducción más pequeño
    let minReductionFactor = Math.min(altoReductionFactor, largoReductionFactor, anchoReductionFactor); // El factor de reducción más pequeño
  
    // Cálculo de las nuevas dimensiones
    let nuevoAlto = [nombreVariable].alto * minReductionFactor; // Nueva altura
    let nuevoLargo = [nombreVariable].largo * minReductionFactor; // Nuevo largo
    let nuevoAncho = [nombreVariable].ancho * minReductionFactor; // Nuevo ancho
  
    // Actualización de las dimensiones de la maleta de [nombre del personaje]
    [nombreVariable].alto = nuevoAlto;
    [nombreVariable].largo = nuevoLargo;
    [nombreVariable].ancho = nuevoAncho;
  
    // Mostrar las nuevas dimensiones
    console.log(`Las nuevas dimensiones de la maleta de [nombre del personaje] son: alto = ${nuevoAlto.toFixed(2)}cm, largo = ${nuevoLargo.toFixed(2)}cm, ancho = ${nuevoAncho.toFixed(2)}cm`);
  }
  
  // Llamada a la función para ajustar el tamaño de la maleta
  adjustSuitcaseSize();
  
//-----------------------------------------------------------------------------------------------------------------------------------------

/*
Este bloque de código representa un escenario en el que se descifra una contraseña de wifi dada en binario y se deduce el costo del wifi del salario de un personaje.

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite convertir datos de binario a texto y realizar cálculos con variables.

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/

// Definición de la contraseña del wifi en binario
let wifiPasswordBin = "[valor]"; // Contraseña del wifi en binario

// Definición del costo del wifi
let wifiCost = [valor]; // Costo del wifi por 1 hora

// Función para convertir de binario a texto
function binToText(binString) {
  // Dividir la cadena binaria en segmentos, convertir cada segmento a un carácter y unirlos
  return binString.split('_').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Conversión de la contraseña del wifi de binario a texto
let wifiPassword = binToText(wifiPasswordBin); // Contraseña del wifi en texto

// Deducción del costo del wifi del salario de [nombre del personaje]
[nombreVariable] -= wifiCost; // Actualización del salario de [nombre del personaje]

// Mostrar la contraseña del wifi y el salario actualizado de [nombre del personaje]
console.log(`La contraseña del wifi es: ${wifiPassword}. Después de usar el wifi por 1h, [nombre del personaje] tiene $${[nombreVariable]} disponibles.`);


// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Este bloque de código representa un escenario en el que se traduce una frase reemplazando todas las vocales por 'i'. 

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite realizar una transformación de texto basada en una regla específica.

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/

// Función para traducir una frase
let translateToI = phrase => phrase.replace(/[aeou]/gi, 'i'); // Reemplaza todas las vocales por 'i'

// Frase a traducir
let phrase = "[frase]"; // Frase original

// Traducción de la frase
let translatedPhrase = translateToI(phrase); // Frase traducida

// Mostrar la frase traducida
console.log(`La frase traducida es: "${translatedPhrase}"`);


//----------------------------------------------------------------------------------------------------------------------------------------------

/*
Este bloque de código representa un escenario en el que un personaje juega un juego de piedra, papel o tijeras contra un taxista para determinar si tiene que pagar una tarifa de taxi. 

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite realizar un juego de elección múltiple y realizar cálculos basados en el resultado.

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/

// Definición de la tarifa del taxi
let taxiFare = [valor]; // Tarifa del taxi

// Variable para almacenar el resultado del juego
let gameResult; 

// Función para jugar piedra, papel o tijeras
let playGame = () => {
    // Mapeamos los números a las opciones correspondientes
    let options = {
      "1": "piedra",
      "2": "papel",
      "3": "tijeras"
    };

    // El taxista elige una opción de manera aleatoria
    let taxiGame = options[Math.floor(Math.random() * 3) + 1];

    let userChoice;
    let userGame;

    // Solicitamos la elección del usuario hasta que ingrese un número válido
    alert("[Mensaje inicial del juego]")
    while (!userGame) {
        userChoice = prompt("[Mensaje de solicitud de entrada del usuario]");
        userGame = options[userChoice];

        if (!userGame) {
            alert("[Mensaje de error]");
        }
    }

    // Comparamos las elecciones para determinar el resultado del juego
    if (userGame === taxiGame) {
        gameResult = "[Mensaje de empate]";
    } else if ((userGame === "papel" && taxiGame === "piedra") || (userGame === "piedra" && taxiGame === "tijeras") || (userGame === "tijeras" && taxiGame === "papel")) {
        gameResult = "[Mensaje de victoria]";
    } else {
        gameResult = "[Mensaje de derrota]";
        [nombreVariable] -= taxiFare; // Actualización del salario de [nombre del personaje]
    }

    // Mostrar el resultado del juego y el salario actualizado de [nombre del personaje]
    console.log(`[Mensaje de resultado del juego]. Ahora tienes $${[nombreVariable]} disponibles.`);
}

// Llamada a la función para jugar el juego
playGame();

//------------------------------------------------------------------------------------------------------------------------------------------

//Case 6 Dress pattern and final result

/*
Este bloque de código representa un escenario en el que un personaje realiza una serie de actividades durante varios días. 
El resultado de cada actividad puede afectar el estado del personaje y su dinero disponible.

El código es altamente reutilizable y puede ser adaptado para cualquier situación en la que se necesite simular una serie de eventos que dependen de las decisiones del usuario.

Para reutilizar este código, simplemente reemplace las variables y los mensajes con los que sean relevantes para su situación específica.
*/


let daysInMacondo = 0; // Contador de días que Hildebrando estuvo en Macondo
let alive = true; // Si Hildebrando está vivo

// Función para simular las actividades de Hildebrando
let simulateActivities = () => {
    while (daysInMacondo < 4 && alive) {
        // Solicitamos la elección del usuario
        let userChoice = prompt("Elige el patrón de vestimenta para el día " + (daysInMacondo + 1) + ": \n1. Amarillo (piscina) \n2. Verde (caminatas) \n3. Rojo (playa) \n4. Azul (hotel)");

        switch(userChoice) {
            case '1':
                // Si elige ir a la piscina
                let poolChoice = prompt("El agua de la piscina huele raro. ¿Quieres meterte? \n1. Sí \n2. No");
                if (poolChoice === '1') {
                    // Si se mete, muere
                    alive = false;
                    console.log("Hildebrando se metió a la piscina y se ahogó por demasiado cloro. Terminan las vacaciones.");
                }
                break;
            case '2':
                // Si elige ir de caminatas
                let walkChoice = prompt("¿Quieres ir toda la caminata? \n1. Sí \n2. No");
                if (walkChoice === '1') {
                    // Si elige ir toda la caminata, llega a una hermosa cascada y se toma fotos
                    console.log("Hildebrando fue toda la caminata, llegó a una hermosa cascada y se tomó fotos.");
                } else {
                    // Si no, se devuelve solo y se pierde
                    alive = false;
                    console.log("Hildebrando se devolvió solo de la caminata y se perdió. Terminan las vacaciones.");
                }
                break;
            case '3':
                // Si elige actividades en la playa
                let beachChoice = prompt("Elige una actividad en la playa: \n1. Voleibol \n2. Nadar en el mar y montar moto \n3. Tomar cócteles mientras descansas");
                if (beachChoice === '3') {
                    // Si se pone a tomar cócteles, siente un fuerte dolor de cabeza y empieza a perder la visión
                    alive = false;
                    console.log("Hildebrando se puso a tomar cócteles y empezó a sentir un fuerte dolor de cabeza y a perder la visión. Se tiene que devolver de emergencia. Terminan las vacaciones.");
                } else {
                    // Si elige voleibol o nadar en el mar, la pasa genial
                    console.log("Hildebrando la pasó genial en la playa.");
                }
                break;
            case '4':
                // Si elige actividades dentro del hotel
                let hotelChoice = prompt("Elige una actividad en el hotel: \n1. Bingo \n2. Bailar \n3. Casino y apuesta");
                if (hotelChoice === '1') {
                    // Si juega al bingo, se lo gana y aumenta su dinero
                    hSalary += 500000; // Aumentamos su salario en 500.000
                    console.log("Hildebrando ganó el bingo y aumentó su dinero. Ahora tiene $" + hSalary + " disponibles.");
                } else if (hotelChoice === '3') {
                    // Si va al casino y apuesta, solo se queda con pasaje de regreso
                    hSalary = taxiFare; // Su salario se reduce a la tarifa del taxi
                    console.log("Hildebrando fue al casino y apostó. Ahora solo tiene $" + hSalary + " disponibles para el taxi de regreso.");
                } else {
                    // Si elige bailar, la pasa muy bien
                    console.log("Hildebrando la pasó muy bien bailando en el hotel.");
                }
                break;
            default:
                alert("Por favor, elige un número válido.");
        }

        // Si Hildebrando está vivo, incrementamos los días que estuvo en Macondo
        if (alive) {
            daysInMacondo++;
        }
    }

    // Imprimimos el resultado final
    console.log("Resumen de las vacaciones de Hildebrando:");
    console.log("----------------------------------------");
    console.log(`Días en Macondo: ${daysInMacondo}`);
    console.log(`Estado al final: ${alive ? "Regresó" : "F se murió"}`);
    console.log(`Dinero gastado: $${2500000 - hSalary}`);
}

// Simulamos las actividades de Hildebrando
simulateActivities();
