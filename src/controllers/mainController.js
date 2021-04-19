const fs = require('fs')
const file = fs.createWriteStream('./archivo.ino')

class Controller {

    List(req, res) {
        res.render('index')
    }

    GetCode(req, res) {
        let tokens = req.body
        file.write(tokens.token)
        file.end()
        console.log('Archivo generado')

        res.json({
            message: 'correcto'
        })
    }
}

const controller = new Controller()

module.exports = controller