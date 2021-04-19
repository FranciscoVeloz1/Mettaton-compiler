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
        let insta = {
            tok: '',
            port: ''
        }

        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')
        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ')
            let port = token[4].split(/[()]/)[1]
            identificador.push(insta = {
                tok: token[1],
                port
            })
        }

        return identificador
    }

    TraductorBody(coleccion) {
        let body = ''
        for (let i = 0; i < coleccion.length; i++) {

            if (coleccion[i].descripcion == 'Metodo run') {

                let iden = coleccion[i].token.trim().split('.')[0]
                let vel = coleccion[i].token.trim().split('.')[1].split(' ')[1].split(/[()]/)[1]
                let instancias = this.Identificadores(coleccion)

                for (let j = 0; j < instancias.length; j++) {
                    const inst = instancias[j];
                    if (iden == inst.tok) {
                        if (coleccion[i + 1].descripcion !== 'Metodo tiempo') {
                            body += `analogWrite(${inst.port}, ${vel});\n`
                        } else {
                            let time = coleccion[i+1].token.trim().split(' ')[1].split(/[()]/)[1]
                            body += `analogWrite(${inst.port}, ${vel});\ndelay(${time});\n`
                        }
                    }
                }
            }
        }
        return body
    }


    //Llave final
    TraductoLlaveFinal(lexico) {
        let result = ''

        if (lexico[lexico.length - 1] == '}') {
            result = '}\nc++;\n}'
        }
        return result
    }

    VoidLoop(lexico, coleccion) {
        this.TraductorBody(coleccion)
        // this.Identificadores(coleccion)

        let loop = `${this.TraductorLoop(coleccion)}${this.TraductorBody(coleccion)}${this.TraductoLlaveFinal(lexico)}`
        return loop
    }
}

export default Loop