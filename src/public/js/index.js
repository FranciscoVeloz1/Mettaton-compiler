import ControladorLexico from './controller/controladorLexico.js'
import ControladorEjemplos from './controller/controladorEjemplos.js'

const txtArea = document.getElementById("txtArea")
const btnCondicional = document.getElementById("Condicional")
const btnMetodos = document.getElementById("Metodos")
const btnEstructuras = document.getElementById("Estructuras")
const btnFunciones = document.getElementById("Funciones")
const btnTiempo = document.getElementById("Tiempo")
const btnCompilar = document.getElementById("btnCompilar")

const lexico = new ControladorLexico()
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

    if (Sintactico()) {
        console.log('Correcto')
    }

    else if (Sintactico() == false) {
        console.log('Error Sintactico: Faltante { antes del cuerpo de la tarea principal')
    }

    else {
        console.log('Error Sintactico: Faltante } después del cuerpo de la tarea principal')
    }
})

function Sintactico(descripcion = 'Metodo principal') {
    let res = false
    for (let i = 0; i < coleccion.length; i++) {

        if (coleccion[i].descripcion == descripcion) {

            if (coleccion[i + 1].descripcion == 'Llave inicio') {

                if (coleccion[coleccion.length - 1].descripcion == 'Llave fin') {
                    res = true
                }
                else {
                    res = null
                }
            }

            else {
                res = false
            }
        }
    }
    return res
}

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