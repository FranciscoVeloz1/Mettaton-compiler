import Setup from '../traductor/setup.js'
import Loop from '../traductor/loop.js'

class ControladorTraductor {

    constructor() {
        this.setup = new Setup()
        this.loop = new Loop()
    }

    Traductor(coleccion, lexico) {
        let codigo = ''

        if (lexico.length > 1) {
            codigo = `${this.setup.VoidSetup(lexico, coleccion)}${this.loop.VoidLoop(lexico, coleccion)}`
            return codigo
        }
    }
}

export default ControladorTraductor