import llaves from './llaves.js'
import sinIdentificar from './sinIdentificar.js'
import instancia from './instancia.js'
import variable from './variable.js'
import funcion from './funciones.js'

class ControladorSintactico {
    constructor() {
        this.arreglo = []
        this.Reservadas = ['Sensor', 'Motor', 'Servo', 'Relay']
    }

    //EJECUTAR SINTACTICO
    EjecutarSintactico(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = llaves(coleccion)
            if (result.length == 0)
                result = sinIdentificar(coleccion)
            if (result.length == 0)
                result = instancia.EjecutarInstancia(coleccion)
            if (result.length == 0)
                result = variable.EjecutarVariable(coleccion)
            if (result.length == 0)
                result = funcion.EjecutarFuncion(coleccion)
            if (result.length == 0)
                result = 'Ningun problema ha sido detectado'

            return result
        }
    }

}

export default ControladorSintactico