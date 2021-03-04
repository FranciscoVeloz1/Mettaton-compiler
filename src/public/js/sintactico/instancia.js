class Instancia {

    ReglaIgual(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        let result;

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[2] == '=') {
                result = ''
            } else {
                result = 'Error Sintactico I-002: Faltante = en declaración de variable\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaNew(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        let result;

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[3] == 'new') {
                result = ''
            } else {
                result = 'Error Sintactico I-003: Los constructores de clase deben ser invocados con new\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaReservadas(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        let result

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');
            let res = token[4].split('(')

            debugger
            if (res[0] == 'Servo') {
                if (res[1].charAt(res[1].length - 1) == ')') {
                    result = ''
                } else {
                    result = 'Error Sintactico I-005: Falta parentesis cierra'
                    i = instruction.length + 1

                }
            } else if (res[0] == 'Motor') {
                if (res[1].charAt(res[1].length - 1) == ')') {
                    result = ''
                } else {
                    result = 'Error Sintactico I-005: Falta parentesis cierra'
                    i = instruction.length + 1
                }
            } else if (res[0] == 'Sensor') {
                if (res[1].charAt(res[1].length - 1) == ')') {
                    result = ''
                } else {
                    result = 'Error Sintactico I-005: Falta parentesis cierra'
                    i = instruction.length + 1
                }
            } else if (res[0] == 'Relay') {
                if (res[1].charAt(res[1].length - 1) == ')') {
                    result = ''
                } else {
                    result = 'Error Sintactico I-005: Falta parentesis cierra'
                    i = instruction.length + 1
                }
            } else {
                result = 'Error Sintactico I-004: Instancia no encontrada'
                i = instruction.length + 1

            }
        }

        return result
    }

    EjecutarInstancia(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = this.ReglaIgual(coleccion)
            if (result.length == 0)
                result = this.ReglaNew(coleccion)
            if (result.length == 0)
                result = this.ReglaReservadas(coleccion)
            if (result.length == 0)
                result = ''

            return result
        }
    }
}

export default new Instancia()