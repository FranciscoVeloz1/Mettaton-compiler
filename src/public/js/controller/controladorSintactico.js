class ControladorSintactico {
    constructor() {

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
}

export default ControladorSintactico