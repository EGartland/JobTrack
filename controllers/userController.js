const db = require('../models')
const User = require('../models/User')


const userController = {
    async add(userObj) {
        const newUser = new User(userObj)
        newUser.hashPass()
        const user = await db.User.create(newUser)
        return user
    },
    async getAll() {
        const users = await db.User.find()
        return users
    },
    async getOne(id) {
        const user = await db.User.findById(id).populate('job')
        return user
	},
	async getName(name) {
		const user = await db.User.findOne({niceName: name})
		return user
	},
    async update(id, update) {
        const user = await db.User.findByIdAndUpdate(id, {$set: update})
        return user
    },
    async delete(id) {
        let deleted = await db.User.deleteOne(id)
        return deleted
    }
}

module.exports = userController