import llaves from './llaves.js'
import sinIdentificar from './sinIdentificar.js'
import instancia from './instancia.js'
import variable from './variable.js'
import funcion from './funciones.js'
import principal from './principal.js'
import tiempo from './tiempo.js'
import servo from './servo.js'
import motor from './motor.js'
import condicional from './condicional.js'
import estructura from './estructura.js'

class ControladorSintactico {

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
                result = principal.EjecutarPrincipal(coleccion)
            if (result.length == 0)
                result = tiempo.EjecutarTiempo(coleccion)
            if (result.length == 0)
                result = servo.EjecutarServo(coleccion)
            if (result.length == 0)
                result = motor.EjecutarMotor(coleccion)
            if (result.length == 0)
                result = condicional.EjecutarCondicional(coleccion)
            if (result.length == 0)
                result = estructura.EjecutarEstructura(coleccion)
            if (result.length == 0)
                result = 'Ningun problema ha sido detectado'

            return result
        }
    }
}

export default ControladorSintactico