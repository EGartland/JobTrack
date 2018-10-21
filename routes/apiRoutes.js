const router = require('express').Router()
const userController = require('../controllers/userController')
const jobController = require('../controllers/jobController')

router.route('/login')
    .post(async (req, res) => {
		try { // This is what verifies our user
			let status
			let loginUser = req.body
			console.log(loginUser)
			let dbUser = await userController.getName(loginUser.niceName)
			console.log(dbUser.checkPass(loginUser.password))
			if(dbUser.checkPass(loginUser.password)) {
				status = `User ${loginUser.niceName} authenticated.`
				res.json(dbUser)
			} else {
				status = `Invalid Username or Password.`
				res.send(status)
			}
			console.log(status)
		} catch(err) {
			res.end(`${err}`)
		}
    })

router.route('/register')
    .post(async (req, res) => {
        try {
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
	
router.route('/job')
	.post(async (req, res) => {
		const { id, jobDetails } = req.body
		try {
			res.json(await jobController.add(id, jobDetails))
		} catch(err) {
			throw err
		}
	})
router.route('/job/:id')
	.post(async (req, res) => {
		const { id, jobDetails } = req.body
		try {
			res.json(await jobController.add(id, jobDetails))
		} catch(err) {
			throw err
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params
		try {
			res.json(await jobController.delete(id))
		} catch(err) {
			throw err
		}
	})
	.put(async (req, res) => {
		const { uid, update } = req.body
		const { id } = req.params
		try {
			res.json(await jobController.update(id, update))
		} catch (err) {
			throw err
		}
	})

module.exports = router