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

    CondicionMetodoPrincipal(arreglo) {
        if (this.MetodoPrincipal(arreglo)) {
            console.log('Correcto')
        }

        else if (this.MetodoPrincipal(arreglo) == false) {
            console.log('Error Sintactico: Faltante { antes del cuerpo de la tarea principal')
        }

        else {
            console.log('Error Sintactico: Faltante } después del cuerpo de la tarea principal')
        }
    }
}

export default ControladorSintactico