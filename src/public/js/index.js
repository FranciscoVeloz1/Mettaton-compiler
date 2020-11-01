import Manejador from './controller/manejadorLexico.js';

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")

const manejador = new Manejador()

const patronComparacion = /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
const patronMain = /^task main+[()]+$/i
const patronLlaveInicio = /^\s*{+$/i
const patronLlaveFin = /^\s*}+$/i
const patronComentario = /^\s*[//]\w*/i
const patronCadena = /^\s*var|const \w* = '\w*'+$/i
const patronInstancia = /^\s*var|const \w* = new \w*[(]\d*[)]+$/i
const patronIf = /^if[()]/

let coleccion = []

window.onload = () => {
    for (let i = 1; i < 25; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {

        if (ComprobarComparacion(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Comparación", 1))
        }

        else if (ComprobarMain(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Metodo principal", 1))
        }

        else if (ComprobarLlaveInicio(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Llave inicio", 1))
        }

        else if (ComprobarLlaveFin(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Llave fin", 1))
        }

        else if (ComprobarComentario(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Comentario", 1))
        }

        else if (ComprobarCadena(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Cadena", 1))
        }

        else if (ComprobarInstancia(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Instancia", 1))
        }

        else {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "No identificado", 1))
        }

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})

function ComprobarMain(tokens) {
    let comparacion = patronMain.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}

function ComprobarLlaveInicio(tokens) {
    let comparacion = patronLlaveInicio.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}

function ComprobarLlaveFin(tokens) {
    let comparacion = patronLlaveFin.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}

function ComprobarComparacion(tokens) {
    let comparacion = patronComparacion.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}

function ComprobarComentario(tokens) {
    let comparacion = patronComentario.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}


function ComprobarCadena(tokens) {
    let comparacion = patronCadena.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}

function ComprobarInstancia(tokens) {
    let comparacion = patronInstancia.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}