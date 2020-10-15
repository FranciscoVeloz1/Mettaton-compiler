class Controller {

    List(req, res) {
        res.render('index')
    }
}

const controller = new Controller()

module.exports = controller