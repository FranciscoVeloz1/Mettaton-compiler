class Principal {

    ReglaTask(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo principal')
        let result;
        
        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');
            
            if (token[0] == 'task') {
                result = ''
            } else {
                result = 'Error Sintactico T-001: La tarea principal inicia con Task\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    ReglaMain(coleccion) {
        let instruction = coleccion.filter(inst => inst.descripcion == 'Metodo principal')
        let result;

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ');

            if (token[1] == 'main()') {
                result = ''
            } else {
                result = 'Error Sintactico T-002: La tarea principal termina con main()\n'
                i = instruction.length + 1
            }
        }

        return result
    }

    EjecutarPrincipal(coleccion) {
        let result = ''

        if (coleccion.length > 1) {

            result = this.ReglaTask(coleccion)
            if (result.length == 0)
                result = this.ReglaMain(coleccion)
            if (result.length == 0)
                result = ''

            return result
        }
    }
}

export default new Principal()