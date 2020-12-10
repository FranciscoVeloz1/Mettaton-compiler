class ControladorSintactico {
    constructor() {
        this.arreglo = []
        this.contador = 0
        this.resultado = ""
        this.Reservadas = ['Sensor', 'Motor', 'Servo', 'Relay']
        this.NA = 'Ningun problema ha sido detectado'
        this.ErrorLlaveInicio = 'Error Sintactico: Faltante { antes del cuerpo\n'
        this.ErrorLlaveFin = 'Error Sintactico: Faltante } después del cuerpo\n'
        this.ErrorIdNumerico = 'El identificador comienza inmediatamente después del literal numérico\n'
        this.ErrorIgual = 'Faltante = en declaración de variable\n'
        this.ErrorNew = 'Los constructores de clase deben ser invocados con new\n'
        this.ErrorPuerto = 'Redeclaración de constante\n'
        this.ErrorParInicio = 'Faltante ( antes de los parámetros formales'
        this.ErrorParFin = 'Faltante ) después de parámetros formales'
        this.Errorpara = 'Falta parámetro formal'
        this.ErrorMetodo = 'Falta el nombre después . operador'
    }

    SepararLinea(arregloLexico) {
        for (let i = 0; i < arregloLexico.length; i++) {
            this.arreglo[i] = arregloLexico[i].split(/[\s]+/);
        }
    }

    EjecutarSintactico(arreglo, lexico, elemento) {
        elemento.innerHTML = this.NA

        if (this.SinstacticoInstancia(arreglo, lexico) == "true") {
            if (this.SintacticoVariables(arreglo, lexico) == "true") {
                if (this.SintacticoFunciones(arreglo, lexico) == "true") {
                    if (this.SintacticoLLaves(arreglo, lexico) == "true") {
                        if (this.SintacticoPrincipal(arreglo, lexico) == "true") {
                            if (this.SintacticoTiempo(arreglo, lexico) == "true") {
                                if (this.SintacticoMetodo(arreglo, lexico) == "true") {
                                    elemento.innerHTML = this.NA
                                }
                                else {
                                    elemento.innerHTML = this.SintacticoMetodo(arreglo, lexico)
                                }
                            }
                            else {
                                elemento.innerHTML = this.SintacticoTiempo(arreglo, lexico)
                            }
                        }
                        else {
                            elemento.innerHTML = this.SintacticoPrincipal(arreglo, lexico)
                        }
                    }
                    else {
                        elemento.innerHTML = this.SintacticoLLaves(arreglo, lexico)
                    }
                }
                else {
                    elemento.innerHTML = this.SintacticoFunciones(arreglo, lexico)
                }
            }
            else {
                elemento.innerHTML = this.SintacticoVariables(arreglo, lexico)
            }
        }
        else {
            elemento.innerHTML = this.SinstacticoInstancia(arreglo, lexico)
        }
    }

    SintacticoLLaves(arreglo, lexico) {
        let contadorIn = 0
        let contadorFin = 0
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Llave inicio') {
                contadorIn++
            }

            else if (arreglo[i].descripcion == 'Llave fin') {
                contadorFin++
            }
        }

        if (contadorFin == contadorIn) {
            return "true"
        }

        else {
            return "Error Sintactico L-001: Falta una llave"
        }
    }

    SinstacticoInstancia(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Instancia') {
                if (this.arreglo[i][0] == 'const') {
                    if (this.arreglo[i][2] == '=') {
                        if (this.arreglo[i][3] == 'new') {
                            let reservado = String(this.arreglo[i][4])
                            for (let l = 0; l < this.Reservadas.length; l++) {
                                for (let k = 0; k <= 13; k++) {
                                    let arregloReser = `${this.Reservadas[l]}(${k})`
                                    if (reservado == arregloReser) {

                                        k = 14;
                                        l = 5;

                                        for (let j = 0; j < 10; j++) {
                                            if (this.arreglo[i][1].charAt(0) != j) {
                                                this.resultado = "true"
                                            }
                                            else {
                                                this.resultado = `Error Sintactico I-001: ${this.ErrorIdNumerico}`
                                                j = 11
                                            }
                                        }
                                    }
                                    else {
                                        this.resultado = `Error Sintactico I-004: ${this.ErrorPuerto}`
                                    }
                                }
                            }
                        }
                        else {
                            this.resultado = `Error Sintactico I-003: ${this.ErrorNew}`
                        }
                    }
                    else {
                        this.resultado = `Error Sintactico I-002: ${this.ErrorIgual}`
                    }
                }
            }
        }
        return this.resultado
    }

    SintacticoVariables(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Variable') {

                if (this.arreglo[i][0] == 'var') {

                    if (this.arreglo[i][2] == '=') {

                        for (let j = 0; j < 10; j++) {
                            if (this.arreglo[i][1].charAt(0) != j) {
                                this.resultado = "true"
                            }
                            else {
                                this.resultado = `Error Sintactico V-001: ${this.ErrorIdNumerico}`
                                j = 11
                            }
                        }
                    }

                    else {
                        this.resultado = `Error Sintactico V-002: ${this.ErrorIgual}`
                    }
                }
            }
        }

        return this.resultado
    }

    SintacticoFunciones(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Función') {

                if (this.arreglo[i][0] == 'function') {

                    let parametros = this.arreglo[i][2]
                    if (parametros.charAt(0) == '(') {
                        if (parametros.charAt(parametros.length - 1) == ')') {

                            for (let j = 0; j < 10; j++) {
                                if (this.arreglo[i][1].charAt(0) != j) {
                                    this.resultado = "true"
                                }
                                else {
                                    this.resultado = `Error Sintactico F-001: ${this.ErrorIdNumerico}`
                                    j = 11
                                }
                            }
                        }
                        else {
                            this.resultado = `Error Sintactico F-003: ${this.ErrorParFin}`
                        }
                    }
                    else {
                        this.resultado = `Error Sintactico F-004: ${this.ErrorParInicio}`
                    }
                }
            }
        }
        return this.resultado
    }

    SintacticoPrincipal(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Metodo principal') {
                if (this.arreglo[i][0] == 'task') {
                    let parametros = this.arreglo[i][1]
                    if (parametros.charAt(4) == '(') {
                        if (parametros.charAt(parametros.length - 1) == ')') {
                            for (let j = 0; j < 10; j++) {
                                if (parametros.charAt(5) != j) {
                                    this.resultado = "true"
                                }
                                else {
                                    this.resultado = `Error Sintactico T-002: ${this.Errorpara}`
                                    j = 10
                                }
                            }
                        }
                        else {
                            this.resultado = `Error Sintactico T-004: ${this.ErrorParFin}`
                        }
                    }
                    else {
                        this.resultado = `Error Sintactico T-003: ${this.ErrorParInicio}`
                    }
                }
            }
        }
        return this.resultado
    }

    SintacticoTiempo(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Metodo tiempo') {
                let parametros = this.arreglo[i][1]
                if (parametros.charAt(9) == '(') {
                    if (parametros.charAt(parametros.length - 1) == ')') {
                        for (let j = 0; j < 10; j++) {
                            if (parametros.charAt(10) == j) {
                                this.resultado = "true"
                                j = 10
                            }
                            else {
                                this.resultado = `Error Sintactico W-001: ${this.Errorpara}`
                            }
                        }
                    }
                    else {
                        this.resultado = `Error Sintactico W-003: ${this.ErrorParFin}`
                    }
                }

                else {
                    this.resultado = `Error Sintactico W-002: ${this.ErrorParInicio}`
                }
            }
        }
        return this.resultado
    }

    SintacticoMetodo(arreglo, lexico) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Metodo') {
                let newArreglo = this.arreglo[i][1].split(".")

                if (newArreglo[1] == "on" || newArreglo[1] == "off") {
                    console.log(newArreglo[0])
                    for (let j = 0; j < 10; j++) {

                        if (newArreglo[0].charAt(0) != j) {
                            this.resultado = "true"
                        }
                        else {
                            debugger
                            this.resultado = `Error Sintactico M-002: ${this.ErrorIdNumerico}`
                            j = 11
                            i = lexico.length + 1
                        }
                    }
                }

                else if (newArreglo[1].charAt(0) == 'r') {
                    console.log(newArreglo[0])
                    this.resultado = "true"
                }

                else if (newArreglo[1].charAt(0) == 'p') {
                    console.log(newArreglo[0])
                    this.resultado = "true"
                }

                else {
                    this.resultado = `Error Sintactico M-001: ${this.ErrorMetodo}`
                }
            }
        }
        return this.resultado
    }
}

export default ControladorSintactico