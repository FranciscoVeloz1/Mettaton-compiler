import Controlador from './controller/controladorLexico.js'

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")
const btnLimpiar = document.getElementById("btnLimpiar")
const btnCondicional = document.getElementById("Condicional")
const btnMetodos = document.getElementById("Metodos")
const btnEstructuras = document.getElementById("Estructuras")
const btnFunciones = document.getElementById("Funciones")
const btnTiempo = document.getElementById("Tiempo")

const controlador = new Controlador()

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

btnSeparar.addEventListener('click', () => {

    controlador.Separar(txtArea.value)

    for (let i = 0; i < controlador.arreglo.length; i++) {

        if (controlador.Comprobar(controlador.arreglo[i], patronMain) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Metodo principal", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronLlaveInicio) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Llave inicio", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronLlaveFin) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Llave fin", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronComentario) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Comentario", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronCadena) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Cadena", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronIf) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Declaración if", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronWhile) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Estructura de control", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronElse) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Declaración else", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronTiempo) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Metodo tiempo", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronFunction) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Función", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], anyFunction) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Función", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronComparacion) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Comparación", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronInstancia) == true) {
            debugger
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Instancia", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronMetodo) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Metodo", 1))
        }

        else if (controlador.Comprobar(controlador.arreglo[i], patronReservada) == true) {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "Palabra reservada", 1))
        }

        else {
            coleccion.push(new Controlador(i + 1, controlador.arreglo[i], "No identificado", 1))
        }

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()

    }
})

btnLimpiar.addEventListener('click', () => {
    location.reload()
})

btnCondicional.addEventListener('click', () => {
    txtArea.value = controlador.EjemploCondicionales()
})

btnMetodos.addEventListener('click', () => {
    txtArea.value = controlador.EjemploMetodos()
})

btnEstructuras.addEventListener('click', () => {
    txtArea.value = controlador.EjemploEstructuras()
})

btnFunciones.addEventListener('click', () => {
    txtArea.value = controlador.EjemploFunciones()
})

btnTiempo.addEventListener('click', () => {
    txtArea.value = controlador.EjemploTiempo()
})