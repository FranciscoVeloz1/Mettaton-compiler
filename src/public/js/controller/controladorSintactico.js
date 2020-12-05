class ControladorSintactico {
    constructor() {
        this.arreglo = []
        this.contador = 0
        this.Reservadas = ['Sensor', 'Motor', 'Servo', 'Relay']
        this.NA = 'Ningun problema ha sido detectado'
        this.ErrorLlaveInicio = 'Error Sintactico: Faltante { antes del cuerpo\n'
        this.ErrorLlaveFin = 'Error Sintactico: Faltante } después del cuerpo\n'
        this.ErrorIdNumerico = 'Error Sintactico I-001: El identificador comienza inmediatamente después del literal numérico\n'
        this.ErrorIgual = 'Error Sintactico I-002: Faltante = en declaración de variable\n'
        this.ErrorNew = 'Error Sintactico I-003: Los constructores de clase deben ser invocados con new\n'
        this.ErrorPuerto = 'Error Sintactico I-004: Redeclaración de constante\n'
    }

    MetodoPrincipal(arreglo) {
        let res = false
        for (let i = 0; i < arreglo.length; i++) {

            if (arreglo[i].descripcion == 'Metodo principal') {

                if (arreglo[i + 1].descripcion == 'Llave inicio') {

                    if (arreglo[arreglo.length - 1].descripcion == 'Llave fin') {
                        res = true
                    }
                    else {
                        res = null
                    }
                }

                else {
                    res = false
                }
            }
        }
        return res
    }

    CondicionMetodoPrincipal(arreglo, elemento) {
        if (this.MetodoPrincipal(arreglo)) {
            elemento.innerHTML += this.NA
        }

        else if (this.MetodoPrincipal(arreglo) == false) {
            elemento.innerHTML = this.ErrorLlaveInicio
        }

        else {
            elemento.innerHTML = this.ErrorLlaveFin
        }
    }

    SepararLinea(arregloLexico) {
        for (let i = 0; i < arregloLexico.length; i++) {
            this.arreglo[i] = arregloLexico[i].split(/[\s]+/);
        }
    }

    /*SintacticoLLaves() {
        Hacer un contador de llaves de inicio y uno de llaves de fin..
        Si al final ambos contadores no coinciden, quiere decir que falta una llave
    }*/

    SinstacticoInstancia(arreglo, lexico, elemento) {
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
                                                elemento.innerHTML = this.NA
                                            }
                                            else {
                                                elemento.innerHTML = this.ErrorIdNumerico
                                                j = 11
                                            }
                                        }

                                    }
                                    else {
                                        elemento.innerHTML = this.ErrorPuerto
                                    }
                                }
                            }

                        }
                        else {
                            elemento.innerHTML = this.ErrorNew
                        }

                    }
                    else {
                        elemento.innerHTML = this.ErrorIgual
                    }
                }
            }
        }
    }

    SintacticoVariables(arreglo, lexico, elemento) {
        for (let i = 0; i < lexico.length; i++) {
            if (arreglo[i].descripcion == 'Variable') {

                if (this.arreglo[i][0] == 'var') {

                    if (this.arreglo[i][2] == '=') {

                        for (let j = 0; j < 10; j++) {
                            if (this.arreglo[i][1].charAt(0) != j) {
                                elemento.innerHTML = this.NA
                            }
                            else {
                                elemento.innerHTML = this.ErrorIdNumerico
                                j = 11
                            }
                        }
                    }

                    else {
                        elemento.innerHTML = this.ErrorIgual
                    }
                }
            }
        }

    }

}

export default ControladorSintactico