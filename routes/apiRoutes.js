const router = require('express').Router()
const user = require('../controllers/userController')

router.route('/login')
    .post((req, res) => {

    })
    .get((req, res) => {

    })

router.route('/users')
    .get((req, res) => {

    })
    .post(async (req, res) => {
        try {
            console.log('hello')
            console.log(req.body)
            res.json(await user.add(req.body))
        } catch(err) {
            // throw err
            res.end(`${err}`)
        }

    })

router.route('/user/:id')
    .get((req, res) => {
        user.getOne(req.params.id)
    })
    .put((req, res) => {
        user.update(req.params.id, req.body)
    })
    .delete((req, res) => {
        user.delete(req.params.id)
    })

module.exports = router