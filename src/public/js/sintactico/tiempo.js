class Tiempo {

    ReglaInicio(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo tiempo')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[1].charAt(0) == '(') {
                result = ''
            } else {
                result = 'Error Sintactico W-001: Faltante ( antes de los parámetros formales'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaFin(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo tiempo')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[1].charAt(token[1].length - 1) == ')') {
                result = ''
            } else {
                result = 'Error Sintactico W-002: Faltante ) antes de los parámetros formales'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaDeclarada(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Función declarada')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[0].charAt(0) == 'w' && token[0].charAt(1) == 'a' && token[0].charAt(2) == 'i') {
                result = 'Error Sintactico W-003: Funcion de tiempo mal escrita'
                i = instruction.length + 1
            } else {
                result = ''
            }
        }

        return result
    }


    EjecutarTiempo(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = this.ReglaInicio(coleccion)
            if (result.length == 0)
                result = this.ReglaFin(coleccion)
            if (result.length == 0)
                result = this.ReglaDeclarada(coleccion)
            if (result.length == 0)
                result = 'Ningun problema ha sido detectado'

            return result
        }
    }
}

export default new Tiempo()