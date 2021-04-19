class Loop {
    //Void loop
    TraductorLoop(coleccion) {
        let result = ''
        let instruction = coleccion.filter(inst => inst.descripcion == 'Estructura de control')

        if (instruction[0].token.trim() == 'while (true)') {
            result = '}\nvoid loop() {\nif(c==0){\n'
        }

        return result
    }

    Identificadores(coleccion) {
        let identificador = []
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ')
            identificador.push(token[1])
        }

        return identificador
    }

    TraductorBody(lexico, coleccion) {
        let body = ''

        for (const l of lexico) {
            let iden = l.trim().split(' ')[1]

            for (let i = 0; i < this.Identificadores(coleccion).length; i++) {
                const identificador = this.Identificadores(coleccion)[i];
                if(iden == identificador) {
                    console.log('shet')
                    return
                }
            }
        }

        return body
    }


    //Llave final
    TraductoLlaveFinal(lexico) {
        let result = ''

        if (lexico[lexico.length - 1] == '}') {
            result = '}\n}'
        }
        return result
    }

    VoidLoop(lexico, coleccion) {
        this.TraductorBody(lexico, coleccion)

        let loop = `${this.TraductorLoop(coleccion)}${this.TraductoLlaveFinal(lexico)}`
        return loop
    }
}

export default Loop