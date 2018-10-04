const db = require('../models')


const userController = {
    async add(userObj) {
        const user = await db.User.create(userObj)
        return user
    },
    async getAll() {
        const users = await db.User.find()
        return users
    },
    async getOne(id) {
        const user = await db.User.findById(id)
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