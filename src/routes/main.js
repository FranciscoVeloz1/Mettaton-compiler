const { Router } = require('express')
const template = require('../controllers/mainController.js')

class IndexRouter {
    constructor() {
        this.router = Router()
        this.Config()
    }

    Config() {
        this.router.get('/', template.List)
        this.router.post('/code', template.GetCode)
    }
}

module.exports = new IndexRouter().router