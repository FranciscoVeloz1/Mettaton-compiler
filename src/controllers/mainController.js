const fs = require('fs')
const excec = require('child_process').exec

class Controller {

    List(req, res) {
        res.render('index')
    }

    GetCode(req, res) {
        let tokens = req.body
        let arduwin = 'ArduinoUploader.exe archivo.ino 13 COM3'

        fs.writeFile('./archivo.ino', tokens.token, 'utf8', error => {
            if (error) throw error;
            console.log('Archivo generado')
        })

        fs.writeFile('./start.bat', arduwin, 'utf8', error => {
            if (error) throw error;
            console.log('Bat generado')
        })

        excec('start.bat', (err, stdout) => {
            if (err) {
                throw err
            }

            console.log('comando ejecutado')
            console.log(stdout)
        })

        res.json({
            message: 'correcto'
        })
    }
}

const controller = new Controller()

module.exports = controller