const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSessionSchema = new Schema({
    UserId: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
    ],
    ended: {
        type: Boolean,
        default: false
    }
})

const UserSession = mongoose.model('UserSession', UserSessionSchema)

module.exports = UserSession