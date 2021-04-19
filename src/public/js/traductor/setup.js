class Setup {
    
    //Void Setup
    TraductorMain(lexico) {
        let result = ''

        if (lexico[0] == 'task main()') {
            result = `#include <Servo.h>\nServo servoX;\nint c = 0;\nvoid setup() {\n`
        }

        return result
    }

    //pinMode
    TraductorInstancias(coleccion) {
        let result = ''
        let instruction = coleccion.filter(inst => inst.descripcion == 'Instancia')

        for (let i = 0; i < instruction.length; i++) {
            let token = instruction[i].token.trim().split(' ')
            let type = token[4].trim().split(/[()]/)

            if (type[0] == 'Sensor') {
                result += `pinMode(${type[1]}, INPUT);\n`
            }

            if (type[0] == 'Motor') {
                result += `pinMode(${type[1]}, OUTPUT);\n`
            }

            if (type[0] == 'Relay') {
                result += `pinMode(${type[1]}, OUTPUT);\n`
            }

            if (type[0] == 'Servo') {
                result += `pinMode(${type[1]}, OUTPUT);\n`
            }
        }

        return result
    }

    VoidSetup(lexico, coleccion) {
        let setup = `${this.TraductorMain(lexico)}${this.TraductorInstancias(coleccion)}`
        return setup
    }
}

export default Setup