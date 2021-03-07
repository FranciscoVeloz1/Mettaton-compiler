class Variable {

    ReglaVar(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Variable')
        let result = '';
        
        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[0] == 'var') {
                result = ''
            } else {
                result = 'Error Sintactico V-001: Las variables deben de iniciar con var\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaIdentificador(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Variable')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            for (let j = 0; j <= 9; j++) {
                if (token[1].charAt(0) != j) {
                    result = ''
                } else {
                    result = 'Error Sintactico V-002: Los identificadores no deben iniciar con un caracter numerico\n'
                    j = 10
                    i = instruction.length + 1
                }
            }
        }

        return result
    }

    ReglaIgual(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Variable')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[2] == '=') {
                result = ''
            } else {
                result = 'Error Sintactico V-003: Faltante = en declaración de variable\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    EjecutarVariable(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = this.ReglaVar(coleccion)
            if (result.length == 0)
                result = this.ReglaIdentificador(coleccion)
            if (result.length == 0)
                result = this.ReglaIgual(coleccion)
            return result
        }
    }
}

export default new Variable()