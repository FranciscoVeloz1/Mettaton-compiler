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

const patronComparacion = /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
const patronMain = /^task main+[()]+$/i
const patronLlaveInicio = /^\s*{+$/i
const patronLlaveFin = /^\s*}+$/i
const patronComentario = /^\s*[//]\w*/i
const patronCadena = /^\s*var|const \w* = '\w*'+$/i
const patronInstancia = /\s* var|const \w* = new \w*[(\w*|\d*)]+$/i
const patronIf = /^\s*if[(\w*)]+$/
const patronElse = /^\s*else+$/
const patronWhile = /^\s*while[(\w*)]+$/
const patronFunction = /^\s*function \w*[(\w*)]+$/
const patronTiempo = /^\s*wait1msec[(\w*)]+$/
const patronReservada = /^\s*new|Servo|Relay|Sensor|Motor|return|PI/
const patronMetodo = /^click|run|off|position|on+$/i
const anyFunction = /^\s*\w*[(]\w\w*[)]+$/i

let coleccion = []

window.onload = () => {
    for (let i = 1; i < 25; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnCompilar.addEventListener('click', () => {

    lexico.LimpiarTabla(coleccion, "resultado")
    lexico.Separar(txtArea.value)

    Lexico()

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

function Lexico() {
    for (let i = 0; i < lexico.arreglo.length; i++) {

        if (lexico.Comprobar(lexico.arreglo[i], patronMain) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Metodo principal", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronLlaveInicio) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Llave inicio", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronLlaveFin) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Llave fin", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronComentario) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Comentario", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronCadena) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Cadena", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronIf) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Declaración if", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronWhile) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Estructura de control", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronElse) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Declaración else", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronTiempo) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Metodo tiempo", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronFunction) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Función", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], anyFunction) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Función", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronComparacion) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Comparación", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronInstancia) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Instancia", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronMetodo) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Metodo", 1))
        }

        else if (lexico.Comprobar(lexico.arreglo[i], patronReservada) == true) {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "Palabra reservada", 1))
        }

        else {
            coleccion.push(new ControladorLexico(i + 1, lexico.arreglo[i], "No identificado", 1))
        }

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
}

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