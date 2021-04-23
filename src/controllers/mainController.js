const fs = require('fs')
const excec = require('child_process').exec

class Controller {

    List(req, res) {
        res.render('index')
    }

    GetCode(req, res) {
        let { token, port, placa } = req.body
        console.log(req.body)
        let arduwin = `ArduinoUploader.exe archivo.ino ${placa} ${port}`

        fs.writeFile('./archivo.ino', token, 'utf8', error => {
            if (error) throw error;
            console.log('Archivo generado')
        })

        fs.writeFile('./start.bat', arduwin, 'utf8', error => {
            if (error) throw error;
            console.log('Bat generado')
        })

        excec('start.bat', (err, stdout) => {
            try {
                console.log('comando ejecutado')
                console.log(stdout)
            } catch (error) {
                console.log('Error al subir el archivo')
            }
        })

        res.json({
            message: 'correcto'
        })
    }
}

const controller = new Controller()

module.exports = controller