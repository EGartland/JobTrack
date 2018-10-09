const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
	niceName: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    createdTime: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.methods = {
    hashPass() {
        let salt = bcrypt.genSaltSync(10)
        return this.password = bcrypt.hashSync(this.password, salt)
    },
    checkPass(pass) {
        return bcrypt.compareSync(pass, this.password)
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User