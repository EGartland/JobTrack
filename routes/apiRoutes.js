const router = require('express').Router()
const userController = require('../controllers/userController')
const User = require('../models/User')

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
    .get((req, res) => {

    })
    .post(async (req, res) => {
        try {
            console.log('hello')
            console.log(req.body)
            res.json(await userController.add(req.body))
        } catch(err) {
            // throw err
            res.end(`${err}`)
        }

    })

router.route('/user/:id')
    .get((req, res) => {
        userController.getOne(req.params.id)
    })
    .put((req, res) => {
        userController.update(req.params.id, req.body)
    })
    .delete((req, res) => {
        userController.delete(req.params.id)
    })

module.exports = router