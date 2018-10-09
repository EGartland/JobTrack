const router = require('express').Router()
const userController = require('../controllers/userController')

router.route('/login')
    .post((req, res) => {

    })

router.route('/register')
    .post(async (req, res) => {
        try{
            let user = await userController.add(req.body)
            res.json(user)
        } catch(err) {
            res.end(`${err}`)
        }
    })

router.route('/users')
    .get(async (req, res) => {
       try {
            res.json(await userController.getAll())
        } catch(err) {
            res.end(`${err}`)
        }
    })

router.route('/user/:id')
    .get(async (req, res) => {
        try {
            res.json(await userController.getOne(req.params.id))
        } catch(err) {
            res.end(`${err}`)
        }
    })
    .put(async (req, res) => {
        try {
            res.json(await userController.update(req.params.id, req.body))
        } catch(err) {
            res.end(`${err}`)
        }
    })
    .delete(async (req, res) => {
        try {
            res.json(await userController.delete(req.params.id))
        } catch(err) {
            res.end(`${err}`)
        }
    })

module.exports = router