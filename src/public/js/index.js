import ControladorIndex from './controller/controladorIndex.js'
import ControladorLexico from './controller/controladorLexico.js'
import ControladorSintactico from './controller/controladorSintactico.js'
import ControladorEjemplos from './controller/controladorEjemplos.js'

//Elementos del compilador
const txtArea = document.getElementById("txtArea")
const lblproblemas = document.getElementById("lblproblemas")
const btnCompilar = document.getElementById("btnCompilar")
const btnLexico = document.getElementById("btnLexico")
const btnSintactico = document.getElementById("btnSintactico")

//Botones de ejemplos
const btnCondicional = document.getElementById("Condicional")
const btnMetodos = document.getElementById("Metodos")
const btnEstructuras = document.getElementById("Estructuras")
const btnFunciones = document.getElementById("Funciones")
const btnTiempo = document.getElementById("Tiempo")

//Instancias de las clases
const conIndex = new ControladorIndex()
const lexico = new ControladorLexico()
const sintactico = new ControladorSintactico()
const ejemplos = new ControladorEjemplos()

let coleccion = []

window.onload = () => {
    for (let i = 1; i < 25; i++) {
        lineas.innerHTML += i + "\n"
    }
}

btnSintactico.addEventListener('click', () => {
    conIndex.AñadirClase("tablaLex", "tabla_hide")
    conIndex.AñadirClase("proSintactico", "sintactico_show")
})

btnLexico.addEventListener('click', () => {
    conIndex.QuitarClase("tablaLex", "tabla_hide")
    conIndex.QuitarClase("proSintactico", "sintactico_show")
})

btnCompilar.addEventListener('click', () => {

    //Analisis Lexico
    lexico.LimpiarTabla(coleccion, "resultado")
    lexico.Separar(txtArea.value)
    lexico.AnalizadorLexico(coleccion, "resultado")

    console.log(SepararLinea())

    //Analisis sintactico
    sintactico.CondicionMetodoPrincipal(coleccion, lblproblemas)
})

function SepararLinea() {
    let newArreglo = []
    newArreglo = lexico.arreglo[1].split(/[\s]+/);
    let r

    if (coleccion[1].descripcion == 'Instancia') {
        if (newArreglo[0] == 'const' || 'var') {

            if (newArreglo[1].charAt(0) != 1) {

                if (newArreglo[2] == '=') {

                    if (newArreglo[3] == 'new') {
                        r = 'correcto'
                    }

                    else {
                        r = 'incorrecto'
                    }
                }
            }

            else {
                r = 'incorrecto'
            }
        }
        else {
            r = 'incorrecto'
        }

        return r
    }
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