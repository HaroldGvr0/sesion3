const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
    Seleccione el ejercicio con el que desea trabajar:
    1. Determinar si un número es positivo, negativo o cero.
    2. Encontrar el mayor de tres números.
    3. Calcular el factorial de un número.
    4. Determinar si un número es par o impar.
    5. Mezclar dos colores básicos.
    6. Mostrar el mes correspondiente a un número del 1 al 12.
    7. Determinar el tipo de vehículo según la categoría.
    8. Salir.
    `);

    rl.question('Ingrese el número de su opción: ', (opcion) => {
        switch(opcion) {
            case '1':
                ejercicio1();
                break;
            case '2':
                ejercicio2();
                break;
            case '3':
                ejercicio3();
                break;
            case '4':
                ejercicio4();
                break;
            case '5':
                ejercicio5();
                break;
            case '6':
                ejercicio6();
                break;
            case '7':
                ejercicio7();
                break;
            case '8':
                rl.close();
                break;
            default:
                console.log('Opción no válida. Por favor intente de nuevo.');
                mostrarMenu();
                break;
        }
    });
};

const ejercicio1 = () => {
    rl.question('Por favor, ingrese un número: ', (input) => {
        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log('Lo que ingresaste no es un número válido.');
        } else {
            if (number > 0) {
                console.log('El número es positivo.');
            } else if (number < 0) {
                console.log('El número es negativo.');
            } else {
                console.log('El número es cero.');
            }
        }

        rl.close();
    });
};

const obtenerNumero = (mensaje, callback) => {
    rl.question(mensaje, (input) => {
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log('Lo que ingresaste no es un número válido.');
            obtenerNumero(mensaje, callback);
        } else {
            callback(number);
        }
    });
};

const ejercicio2 = () => {
    let num1, num2, num3;

    obtenerNumero('Por favor, ingrese el primer número: ', (numero) => {
        num1 = numero;

        obtenerNumero('Por favor, ingrese el segundo número: ', (numero) => {
            num2 = numero;

            obtenerNumero('Por favor, ingrese el tercer número: ', (numero) => {
                num3 = numero;

                const mayor = Math.max(num1, num2, num3);
                console.log(`El mayor de los tres números es: ${mayor}`);

                rl.close();
            });
        });
    });
};

const calcularFactorial = (num) => {
    if (num < 0) return null;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};

const ejercicio3 = () => {
    rl.question('Por favor, ingrese un número: ', (input) => {
        const number = parseInt(input);

        if (isNaN(number) || number < 0) {
            console.log('Lo que ingresaste no es un número válido o es un número negativo.');
        } else {
            const result = calcularFactorial(number);
            console.log(`El factorial de ${number} es: ${result}`);
        }

        rl.close();
    });
};

const ejercicio4 = () => {
    rl.question('Por favor, ingrese un número: ', (input) => {
        const number = parseInt(input);

        if (isNaN(number)) {
            console.log('Lo que ingresaste no es un número válido.');
        } else {
            if (number % 2 === 0) {
                console.log(`El número ${number} es par.`);
            } else {
                console.log(`El número ${number} es impar.`);
            }
        }

        rl.close();
    });
};

const mezclarColores = (color1, color2) => {
    if ((color1 === 'azul' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'azul')) {
        return 'verde';
    } else if ((color1 === 'azul' && color2 === 'rojo') || (color1 === 'rojo' && color2 === 'azul')) {
        return 'morado';
    } else if ((color1 === 'rojo' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'rojo')) {
        return 'naranja';
    } else {
        return 'error';
    }
};

const ejercicio5 = () => {
    rl.question('Por favor, ingrese el primer color (rojo, amarillo, azul): ', (color1) => {
        color1 = color1.toLowerCase();

        rl.question('Por favor, ingrese el segundo color (rojo, amarillo, azul): ', (color2) => {
            color2 = color2.toLowerCase();

            const resultado = mezclarColores(color1, color2);
            if (resultado === 'error') {
                console.log('Combinación de colores no válida.');
            } else {
                console.log(`La mezcla de ${color1} y ${color2} produce ${resultado}.`);
            }

            rl.close();
        });
    });
};

const ejercicio6 = () => {
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    rl.question('Por favor, ingrese un número del 1 al 12 para determinar el mes: ', (input) => {
        const numero = parseInt(input);

        if (isNaN(numero) || numero < 1 || numero > 12) {
            console.log('Número no válido. Por favor ingrese un número entre 1 y 12.');
        } else {
            console.log(`El mes correspondiente al número ${numero} es ${meses[numero - 1]}.`);
        }

        rl.close();
    });
};

const ejercicio7 = () => {
    const determinarVehiculo = (categoria) => {
        switch (categoria.toLowerCase()) {
            case 'moto':
                return 'Moto';
            case 'auto':
                return 'Auto';
            case 'camion':
                return 'Camión';
            case 'bicicleta':
                return 'Bicicleta';
            default:
                return 'Categoría no válida';
        }
    };

    rl.question('Por favor, ingrese una categoría de vehículo (Moto, Auto, Camion, Bicicleta): ', (input) => {
        const categoria = input.trim();
        const resultado = determinarVehiculo(categoria);
        console.log(resultado);

        rl.close();
    });
};

// Iniciar el menú principal
mostrarMenu();
