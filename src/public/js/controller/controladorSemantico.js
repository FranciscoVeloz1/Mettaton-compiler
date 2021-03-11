class ControladorSemantico {

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
                result = 'Error Semantico I-002: No puede haber 2 identificadores iguales\n'
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
                result = 'Error Semantico V-002: No puede haber 2 identificadores iguales'
                i = instruction.length + 1
            } else {
                result = ''
            }
        }

        return result
    }

    

    Semantico(lexico, coleccion) {
        let result = ''

        if (lexico.length > 0) {
            result = this.ReglaTaskMain(lexico)
            if (result.length == 0)
                result = this.ReglaInstancias(coleccion)
            if (result.length == 0)
                result = this.ReglaVariables(coleccion)
            if (result.length == 0)
                result = this.ReglaInsRepetida(coleccion)
            if (result.length == 0)
                result = this.ReglaVarRepetida(coleccion)
            if (result.length == 0)
                result = 'Ningun problema ha sido detectado'

            return result
        }
    }
}

export default ControladorSemantico