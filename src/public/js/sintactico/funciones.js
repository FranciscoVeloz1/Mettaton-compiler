class Funciones {

    ReglaFuncion(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Función')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[0] == 'function') {
                result = ''
            } else {
                result = 'Error Sintactico F-001: Las funciones deben de iniciar con function\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaIdentificador(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Función')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            for (let j = 0; j <= 9; j++) {
                if (token[1].charAt(0) != j) {
                    result = ''
                } else {
                    result = 'Error Sintactico F-002: Los identificadores no deben iniciar con un caracter numerico \n'
                    j = 10
                    i = instruction.length + 1
                }
            }
        }

        return result
    }

    ReglaParentesisInicio(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Función')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[2].charAt(0) == '(') {
                result = ''
            } else {
                result = 'Error Sintactico F-003: Faltante ( antes de los parámetros formales\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaParentesisCierre(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Función')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[2].charAt(token[2].length - 1) == ')') {
                result = ''
            } else {
                result = 'Error Sintactico F-004: Faltante ) después de parámetros formales'
                i = instruction.length + 1
            }
        }

        return result
    }

    EjecutarFuncion(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = this.ReglaFuncion(coleccion)
            if (result.length == 0)
                result = this.ReglaIdentificador(coleccion)
            if (result.length == 0)
                result = this.ReglaParentesisInicio(coleccion)
            if (result.length == 0)
                result = this.ReglaParentesisCierre(coleccion)
            if (result.length == 0)
                result = ''

            return result
        }
    }

}

export default new Funciones();