class Estructura {

    ReglaInicio(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Estructura de control')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[1].charAt(0) == '(') {
                result = ''
            } else {
                result = 'Error Sintactico E-001: Faltante ( antes de los parámetros formales\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaFin(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Estructura de control')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[1].charAt(token[1].length - 1) == ')') {
                result = ''
            } else {
                result = 'Error Sintactico E-002: Faltante ) despues de los parámetros formales\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    EjecutarEstructura(coleccion) {
        let result = ''

        if (coleccion.length > 1) {
            result = this.ReglaInicio(coleccion)
            if (result.length == 0)
                result = this.ReglaFin(coleccion)
            if (result.length == 0)
                result = ''

            return result
        }
    }
}

export default new Estructura()