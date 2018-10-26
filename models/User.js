const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
	niceName: {
        type: String,
		unique: true,
		required: true,
		validate: {
			validator: function(userName) {
				return userName.trim() !== ''
			},
			message: props => `${props.value} is required!`
		}
    },
    password: {
		type: String,
		required: true,
		validate: {
			validator: function(pass) {
				return pass.trim() !== ''
			},
			message: props => `${props.value} is required!`
		}
    },
	job: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Job'
		}
	],
    createdTime: {
        type: Date,
        default: Date.now()
	},
	resume: {
		type: String,
		validate: {
			validator: function(url) {
				console.log(this, url)
				return /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(url)	
			},
			message: props => `${props.value} is not a valid url!`
		}
	},
	linkedIn: {
		type: String,
		validate: {
			validator: function(url) {
				console.log(this, url)
				return /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(url)	
			},
			message: props => `${props.value} is not a valid url!`
		}
	},
	gitHub: {
		type: String,
		validate: {
			validator: function(url) {
				console.log(this, url)
				return /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(url)	
			},
			message: props => `${props.value} is not a valid url!`
		}
	},
	portfolio: {
		type: String,
		validate: {
			validator: function(url) {
				console.log(this, url)
				return /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(url)	
			},
			message: props => `${props.value} is not a valid url!`
		}
	},
})

UserSchema.methods = {
    hashPass() {
        let salt = bcrypt.genSaltSync(10)
        return this.password = bcrypt.hashSync(this.password, salt)
    },
    checkPass(pass) {
		console.log(pass, this.password)
        return bcrypt.compareSync(pass, this.password)
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User