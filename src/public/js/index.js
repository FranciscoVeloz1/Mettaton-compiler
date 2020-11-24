import ControladorLexico from './controller/controladorLexico.js'
import ControladorSintactico from './controller/controladorSintactico.js'
import ControladorEjemplos from './controller/controladorEjemplos.js'

const txtArea = document.getElementById("txtArea")
const btnCondicional = document.getElementById("Condicional")
const btnMetodos = document.getElementById("Metodos")
const btnEstructuras = document.getElementById("Estructuras")
const btnFunciones = document.getElementById("Funciones")
const btnTiempo = document.getElementById("Tiempo")
const btnCompilar = document.getElementById("btnCompilar")

const lexico = new ControladorLexico()
const sintactico = new ControladorSintactico()
const ejemplos = new ControladorEjemplos()

let coleccion = []

window.onload = () => {
    for (let i = 1; i < 25; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnCompilar.addEventListener('click', () => {

    lexico.LimpiarTabla(coleccion, "resultado")
    lexico.Separar(txtArea.value)
    lexico.AnalizadorLexico(coleccion, "resultado")
    sintactico.CondicionMetodoPrincipal(coleccion)
})

btnCondicional.addEventListener('click', () => {
    txtArea.value = ejemplos.EjemploCondicionales()
})

btnMetodos.addEventListener('click', () => {
    txtArea.value = ejemplos.EjemploMetodos()
})

btnEstructuras.addEventListener('click', () => {
    txtArea.value = ejemplos.EjemploEstructuras()
})

btnFunciones.addEventListener('click', () => {
    txtArea.value = ejemplos.EjemploFunciones()
})

btnTiempo.addEventListener('click', () => {
    txtArea.value = ejemplos.EjemploTiempo()
})