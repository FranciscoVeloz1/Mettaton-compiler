//Dependencies
const express = require('express')
const path = require('path')

//Importing routes
//Example const cardRoutes = require('./routes/cards')

class Server {
    constructor() {
        this.app = express()
        this.Settings()
        this.Routes()
        this.StaticFiles()
    }

    Settings() {
        this.app.set('port', process.env.PORT || 4000)
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, 'views'))
    }

    Routes() {
        this.app.use('/', Ruta)
    }

    StaticFiles() {
        this.app.use(express.static(path.join(__dirname, 'public')))
    }

    Start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`)
        })
    }
}

const server = new Server()
server.Start()