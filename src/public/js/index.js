import Manejador from './controller/manejadorLexico.js';

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")

const manejador = new Manejador()

const reservadas = ["task", "main()", "new", "return", "PI"]
let coleccion = []

window.onload = () => {
    for (let i = 1; i < 20; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {
        coleccion.push(new Manejador(i+1, manejador.arreglo[i], ComprobarReservada(manejador.arreglo[i]), i+1))

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})

function ComprobarReservada(texto) {
    let r
    for (let i = 0; i < reservadas.length; i++) {
        if(texto == reservadas[i]) {
            r = "Palabra reservada"
            i = manejador.arreglo.length
        }
    }
    return r
}