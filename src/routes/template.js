const { Router } = require('express')
const template = require('../controllers/templateController.js')

class IndexRouter {
    constructor() {
        this.router = Router()
        this.Config()
    }

    Config() {
        this.router.get('/', template.List)
    }
}

module.exports = new IndexRouter().router