class ControladorSemantico {
    constructor() {

    }

    Regla1(lexico) {
        let result

        if (lexico[0] == 'task main()') {
            result = ''
        } else {
            result = 'Error, la primera linea debe de ser task main()'
        }

        return result
    }

    Regla2(lexico) {
        let result
        if (lexico[1] == '{') {
            result = ''
        } else {
            result = 'Error, falta llave { en task main()'
        }

        return result
    }

    Regla3(lexico) {
        let result
        if (lexico[lexico.length - 1] == '}') {
            result = 'Correcto'
        } else {
            result = 'Error, falta llave } en task main()'
        }

        return result
    }

    Semantico(lexico) {
        let result

        if (lexico.length > 0) {

            result = this.Regla1(lexico)

            if (result.length == 1)
                result = this.Regla2(lexico)
            if(result.length == 0)
                result = this.Regla3(lexico)


            return result
        }
    }
}

export default ControladorSemantico