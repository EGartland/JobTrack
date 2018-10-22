const router = require('express').Router()
const userController = require('../controllers/userController')
const jobController = require('../controllers/jobController')

router.route('/login')
    .post(async (req, res) => {
		try {
			let status
			let loginUser = req.body
			let dbUser = await userController.getName(loginUser.niceName)
			if(dbUser && dbUser.checkPass(loginUser.password)) {
				status = `User ${loginUser.niceName} authenticated.`
				let user = await userController.getOne(dbUser._id)
				res.json({auth: true, status, user})
			} else {
				status = `Invalid Username or Password.`
				res.json({auth: false, status})
			}
		} catch(err) {
			res.end(`${err}`)
		}
    })

router.route('/register')
    .post(async (req, res) => {
        try {
			let {niceName, password, links } = req.body
			let [resume, linkedIn, gitHub, portfolio] = links
            let user = await userController.add({niceName, password, resume, linkedIn, gitHub, portfolio})
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
		const { uid, jobDetails } = req.body
		try {
			res.json(await jobController.add(uid, jobDetails))
		} catch (err) {
			throw err
		}
	})

router.route('/job/:id')
	.get(async (req, res) => {
		try {
			res.json(await jobController.getOne(req.params.id))
		} catch (err) {
			throw err
		}
	})	
	.put(async (req, res) => {
		const update = req.body
		try {
			res.json(await jobController.update(req.params.id, update))
		} catch (err) {
			throw err
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params
		try {
			res.json(await jobController.delete(id))
		} catch (err) {
			throw err			
		}
	})

module.exports = router