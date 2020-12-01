class ControladorSintactico {
    constructor() {
        this.arreglo = []
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
            elemento.innerHTML = 'Correcto'
        }

        else if (this.MetodoPrincipal(arreglo) == false) {
            elemento.innerHTML = 'Error Sintactico: Faltante { antes del cuerpo de la tarea principal'
        }

        else {
            elemento.innerHTML = 'Error Sintactico: Faltante } después del cuerpo de la tarea principal'
        }
    }

    SepararLinea(arregloLexico) {
        for (let i = 0; i < arregloLexico.length; i++) {
            this.arreglo[i] = arregloLexico[i].split(/[\s]+/);
        }
    }

    SinstacticoInstancia(arreglo) {
        for (let i = 0; i < this.arreglo.length; i++) {

            if (arreglo[i].descripcion == 'Instancia') {
                this.SintacticoVarIns(i)
            }
        }
    }

    SintacticoVarIns(iterador) {

        console.log(this.arreglo[iterador][1])

        if (this.arreglo[iterador][0] == 'const' || 'var') {

            for (let k = 0; k < 10; k++) {
                if (parseInt(this.arreglo[iterador][1].charAt(0)) != k) {
                    console.log("asdasd")
                }
            }
        }
    }

    SintacticoNoNumero() {
        console.log(this.arreglo[0][1])
        console.log(this.arreglo[1][1])

        // for (let k = 0; k <= 9; k++) {
        //     if (parseInt(this.arreglo[i][1].charAt(0)) != k) {
        //         return true
        //     }
        // }


        // for (let i = 0; i < this.arreglo.length; i++) {
        //     if (arreglo[i].descripcion == 'Instancia') {
        //         for (let k = 0; k <= 9; k++) {

        //             if (parseInt(this.arreglo[i][1].charAt(0)) != k) {
        //                 return true
        //             }
        //         }
        //     }
        // }
    }
    /*
    
                    for (let k = 0; k <= 9; k++) {
                        let letra = parseInt(newArreglo[1].charAt(0))
    
                        if (letra != k) {
    
                            if (newArreglo[2] == '=') {
    
                                if (newArreglo[3] == 'new') {
    
                                    for (let j = 0; j <= 13; j++) {
                                        if (newArreglo[4] == `Motor(${j})`) {
                                            r = 'correcto'
                                            j = 14;
                                        }
    
                                        else {
                                            r = 'Puerto fuera del limite'
                                        }
                                    }
                                }
    
                                else {
                                    r = 'incorrecto'
                                }
                            }
                        }
    
                        else {
                            r = 'incorrecto'
                            k = 10
                        }
                    }
                }
    
                return r
            }
        }*/
}

export default ControladorSintactico