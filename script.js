function registrarParticipante() {
    let nombre = prompt('Ingrese el nombre del participante:')
    let horaLlegada = Number(prompt('Ingrese la hora de llegada en formato de 24 horas (7, 8, 9...'))
    while (isNaN(horaLlegada) || horaLlegada < 0 || horaLlegada > 24) {
        horaLlegada = Number(prompt('Hora inválida. Ingrese una hora entre 0 y 24:'))
    }
    return {
        nombre: nombre,
        horaLlegada: horaLlegada,
        puntaje: 1
    }
}

function penalizacion(nombre, horaLimite) {
    if (nombre.horaLlegada > horaLimite) {
        nombre.puntaje = 0.5
        console.log('Has llegado tarde 🙁​ tienes 0.5 puntos');
        return true
    } else {
        console.log('Felicitaciones, llegaste a tiempo 😀​ tienes 1 punto');
        return false
    }
}

function totalParticipantes(participantes) {
    console.log('El total de asistentes son ' + (participantes.length));
}

function listadoAsistentes(participantes) {
    if (participantes.length > 0) {
        console.log('A continuacion esta el listado de asistentes:');
        participantes.forEach((p, index) => {
            console.log((index + 1) + '. ' + p.nombre);
        });
    } else {
        console.log('Aún no hay participantes registrados.');
    }
}

let participantes = []
let horaLimite = 7
let totalTarde = 0
let repetir = true

while (repetir) {
    let opcion = prompt(
        'Seleccione una opción:\n' +
        '1 - Registrar participante\n' +
        '2 - Total de asistentes\n' +
        '3 - Listado de asistentes\n' +
        '4 - Total llegadas tarde\n' +
        '5 - Listado llegadas tarde\n' +
        '6 - Resumen asistentes\n' +
        '7 - Salir'
    );

    switch (opcion) {
        case "1":
            let nuevoParticipante = registrarParticipante()
            let tarde = penalizacion(nuevoParticipante, horaLimite)
            if (tarde) totalTarde++
            participantes.push(nuevoParticipante)
            console.log('Usuario creado de manera correcta');
            break;
        case "2":
            totalParticipantes(participantes)
            break;
        case "3":
            listadoAsistentes(participantes)
            break;
        case "4":
            console.log('El total de llegadas tarde es de: ' + totalTarde);
            break;
        case "5":
            console.log('Participantes que llegaron tarde:');
            participantes.forEach(p => {
                if (p.horaLlegada > horaLimite) {
                    console.log(p.nombre + ' llego a las ' + p.horaLlegada + ' horas.');
                }
            })
            break;
        case "6":
            console.log("Resumen general:");
            console.log("Total participantes: " + participantes.length);
            console.log("Total que llegaron tarde: " + totalTarde);
            break;

        case "7":
            repetir = false;
            console.log('Gracias por usar el sistema');
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }

} 
