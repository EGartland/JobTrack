const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
	niceName: {
		type: String,
    },
    password: {
        type: String,
    },
    createdTime: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', UserSchema)

UserSchema.methods = {
    hashPass() {
        let salt = bcrypt.genSaltSync(10)
        return this.password = bcrypt.hashSync(this.password, salt)
    },
    checkPass(pass) {
        return bcrypt.compareSync(pass, this.password)
    }
}

module.exports = User