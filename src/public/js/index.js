import Manejador from './controller/manejadorLexico.js'

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")
const lineas = document.getElementById("lineas")


const manejador = new Manejador()

window.onload = () => {
    for (let i = 1; i < 20; i++) {
        lineas.innerHTML += i + "\n"
    }
}

let coleccion = []

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {
        coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "descripcion", i + 1))
        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})