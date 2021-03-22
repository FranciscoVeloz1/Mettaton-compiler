import ControladorIndex from './controller/controladorIndex.js'
import ControladorLexico from './controller/controladorLexico.js'
import ControladorSintactico from './sintactico/sintactico.controlador.js'
import ControladorEjemplos from './controller/controladorEjemplos.js'
import ControladorSemantico from './controller/semantico.controlador.js'

//Elementos del compilador
const txtArea = document.getElementById("txtArea")
const lblproblemas = document.getElementById("lblproblemas")
const btnCompilar = document.getElementById("btnCompilar")
const btnLexico = document.getElementById("btnLexico")
const btnSintactico = document.getElementById("btnSintactico")

const txtArea2 = document.getElementById('txtArea2')

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
const semantico = new ControladorSemantico()
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

    //Analisis sintactico
    lblproblemas.innerHTML = sintactico.EjecutarSintactico(coleccion)
    conIndex.Errores(lblproblemas, 'btnSintactico')

    //Analisis semantico
    if (sintactico.EjecutarSintactico(coleccion) == 'Ningun problema ha sido detectado') {
        lblproblemas.innerHTML = semantico.Semantico(lexico.arreglo, coleccion)
        conIndex.Errores(lblproblemas, 'btnSintactico')
    }
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

document.getElementById('btnGuardar').addEventListener('click', () => {
    let blob = new Blob([txtArea2.value], {
        type: 'text/plain;charset=utf-8'
    });

    saveAs(blob, 'archivo.sh')
})