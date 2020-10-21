import Manejador from './controller/manejadorLexico.js';

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")

const manejador = new Manejador()

var patronComprobacion = /[A-Z]* [<||>||==] [0-9]*/

let coleccion = []

window.onload = () => {
    for (let i = 1; i < 20; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {

        if (ComprobarComparacion(manejador.arreglo[i]) == true) {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "Comparacion", 1))
        }
        else {
            coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "No identificado", 1))
        }

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})


function ComprobarComparacion(tokens) {
    let comparacion = patronComprobacion.test(tokens)
    let r
    if (comparacion != false) {
        r = true
    }
    return r
}