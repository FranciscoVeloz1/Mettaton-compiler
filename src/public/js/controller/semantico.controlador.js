class ControladorSemantico {

    //REGLAS DE PROGRAMA

    //Regla Task Main
    ReglaTaskMain(lexico) {
        let result = ''

        if (lexico[0] == 'task main()') {
            result = ''
        } else {
            result = 'Error Semantico T-001: La primera linea debe de ser Task Main()\n'
        }

        return result
    }

    //Regla instancias
    ReglaInstancias(coleccion) {
        let result = ''

        for (let i = 0; i < coleccion.length; i++) {
            if (coleccion[i].descripcion == 'Estructura de control') {
                for (let j = i; j < coleccion.length; j++) {
                    if (coleccion[j].descripcion != 'Instancia') {
                        result = ''
                    } else {
                        result = 'Error Semantico I-001: No puede haber instancias dentro del ciclo while\n'
                        j = coleccion.length + 1;
                        i = coleccion.length + 1;
                    }
                }
            }
        }

        return result
    }

    //Instancias con identificador repetido
    ReglaInsRepetida(coleccion) {
        let result = ''
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')

        for (let i = 1; i < instruction.length; i++) {

            if (instruction[i - 1].token.trim().split(' ')[1] == instruction[i].token.trim().split(' ')[1]) {
                result = 'Error Semantico I-002: No puede haber dos identificadores iguales\n'
                i = instruction.length + 1
            } else {
                result = ''
            }
        }

        return result
    }

    //Instancias con parametro repetido
    ReglaParamRepetido(coleccion) {
        let result = ''
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')

        for (let i = 1; i < instruction.length; i++) {
            let inst1 = instruction[i - 1].token.trim().split(' ')[4].split(/[()]/)[1]
            let inst2 = instruction[i].token.trim().split(' ')[4].split(/[()]/)[1]

            if (inst1 == inst2) {
                result = 'Error Semantico I-003: No puede haber dos parametros iguales\n'
                i = instruction.length + 1
            } else {
                result = ''

            }
        }

        return result
    }

    //Regla Variables
    ReglaVariables(coleccion) {
        let result = ''

        for (let i = 0; i < coleccion.length; i++) {
            if (coleccion[i].descripcion == 'Estructura de control') {
                for (let j = i; j < coleccion.length; j++) {
                    if (coleccion[j].descripcion != 'Variable') {
                        result = ''
                    } else {
                        result = 'Error Semantico V-001: No puede haber variables dentro del ciclo while\n'
                        j = coleccion.length + 1;
                        i = coleccion.length + 1;
                    }
                }
            }
        }

        return result
    }

    //Variables con identificador repetido
    ReglaVarRepetida(coleccion) {
        let result = ''
        let instruction = coleccion.filter(inst => inst.descripcion == 'Variable')

        for (let i = 1; i < instruction.length; i++) {
            if (instruction[i - 1].token.trim().split(' ')[1] == instruction[i].token.trim().split(' ')[1]) {
                result = 'Error Semantico V-002: No puede haber dos identificadores iguales'
                i = instruction.length + 1
            } else {
                result = ''
            }
        }

        return result
    }

    //REGLAS DE INSTRUCCIONES

    //Regla parametro instancia
    ReglaParamInstancia(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let inst = instruction[i].token.trim().split(' ')[4].split(/[()]/);

            if (inst[1] >= 2 && inst[1] <= 53) {
                result = ''
            }  else if (inst[1] == 'A0' || inst[1] == 'A1' || inst[1] == 'A2' || inst[1] == 'A3' || inst[1] == 'A4' || inst[1] == 'A5') {
                result = ''
            } else {
                result = 'Error Semantico I-004: Los parametros deben de ser entre 1 y 53 o entre A0 Y A5'
                i = instruction.length + 1
            }
        }

        return result
    }

    //Regla parametro while
    ReglaParamWhile(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Estructura de control')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let inst = instruction[i].token.trim().split(' ')[1].split(/[()]/);

            if (inst[1] == 'true') {
                result = ''
            } else {
                result = 'Error Semantico E-001: El parametro debe de ser true'
                i = instruction.length + 1
            }
        }

        return result
    }

    //Regla parametro Run
    ReglaParamRun(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo run')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let inst = instruction[i].token.trim().split(' ')[1].split(/[()]/);

            if (inst[1] >= 0 && inst[1] <= 255) {
                result = ''
            } else {
                result = 'Error Semantico M-001: El parametro debe estar entre 0 y 255'
                i = instruction.length + 1
            }
        }

        return result
    }

    //Regla parametro position
    ReglaParamPosition(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo posicion')
        let result = '';

        for (let i = 0; i < instruction.length; i++) {
            let inst = instruction[i].token.trim().split(' ')[1].split(/[()]/);

            if (inst[1] >= 0 && inst[1] <= 180) {
                result = ''
            } else {
                result = 'Error Semantico P-001: El parametro debe estar entre 0 y 180'
                i = instruction.length + 1
            }
        }

        return result
    }

    //EJECUCION
    Semantico(lexico, coleccion) {
        let result = ''

        if (lexico.length > 0) {
            result = this.ReglaTaskMain(lexico)
            if (result.length == 0)
                result = this.ReglaInstancias(coleccion)
            if (result.length == 0)
                result = this.ReglaInsRepetida(coleccion)
            if (result.length == 0)
                result = this.ReglaParamRepetido(coleccion)
            if (result.length == 0)
                result = this.ReglaVariables(coleccion)
            if (result.length == 0)
                result = this.ReglaVarRepetida(coleccion)
            if (result.length == 0)
                result = this.ReglaParamInstancia(coleccion)
            if (result.length == 0)
                result = this.ReglaParamWhile(coleccion)
            if (result.length == 0)
                result = this.ReglaParamRun(coleccion)
            if (result.length == 0)
                result = this.ReglaParamPosition(coleccion)
            if (result.length == 0)
                result = 'Ningun problema ha sido detectado'

            return result
        }
    }
}

export default ControladorSemantico