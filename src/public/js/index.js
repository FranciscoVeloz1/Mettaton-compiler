import Manejador from './controller/manejadorLexico.js';

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")

const manejador = new Manejador()

const reservadas = ["task", "main()", "new", "return", "PI"]
const tipoDeDato = ["var", "let", "const"]
let coleccion = []

window.onload = () => {
    for (let i = 1; i < 20; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {

        if (ComprobarReservada(manejador.arreglo[i]) == "Palabra reservada") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Palabra reservada", 1))
        }

        else if (ComprobarTipoDeDato(manejador.arreglo[i]) == "Tipo de dato") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Tipo de dato", 3))
        }

        else if (ComprobarAsignacion(manejador.arreglo[i]) == "Asignacion") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Asignacion", 3))
        }

        else if (ComprobarString(manejador.arreglo[i]) == "String") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "String", 3))
        }

        else if (ComprobarLlaveInicio(manejador.arreglo[i]) == "Llave inicio") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Llave inicio", 2))
        }

        else if (ComprobarLlaveFin(manejador.arreglo[i]) == "Llave fin") {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Llave fin", 2))
        }

        else {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Identificador", 3))
        }

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})

function ComprobarReservada(texto) {
    let r
    for (let i = 0; i < reservadas.length; i++) {
        if (texto == reservadas[i]) {
            r = "Palabra reservada"
            i = manejador.arreglo.length
        }
    }
    return r
}

function ComprobarTipoDeDato(texto) {
    let r
    for (let i = 0; i < tipoDeDato.length; i++) {
        if (texto == tipoDeDato[i]) {
            r = "Tipo de dato"
            i = manejador.arreglo.length
        }
    }
    return r
}

function ComprobarAsignacion(texto) {
    let r
    for (let i = 0; i < 1; i++) {
        if (texto == "=") {
            r = "Asignacion"
            i = manejador.arreglo.length
        }
    }
    return r
}

function ComprobarString(texto) {
    let r
    for (let i = 0; i < tipoDeDato.length; i++) {
        if (texto.charAt(0) == "'" && texto.charAt(texto.length-1) == "'") {
            r = "String"
            i = manejador.arreglo.length
        }
    }
    return r
}

function ComprobarLlaveInicio(texto) {
    let r
    for (let i = 0; i < 1; i++) {
        if (texto == "{") {
            r = "Llave inicio"
            i = manejador.arreglo.length
        }
    }
    return r
}

function ComprobarLlaveFin(texto) {
    let r
    for (let i = 0; i < 1; i++) {
        if (texto == "}") {
            r = "Llave fin"
            i = manejador.arreglo.length
        }
    }
    return r
}