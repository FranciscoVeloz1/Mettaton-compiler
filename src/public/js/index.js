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

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)
    manejador.Generar()
    document.getElementById("resultado").innerHTML += manejador.Mostrar()
})