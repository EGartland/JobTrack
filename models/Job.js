const mongoose = require('mongoose')

const Schema = mongoose.Schema

const JobSchema = new Schema({
	uid: { //User that created this job
		type: Schema.Types.ObjectId,
		ref: 'User',
		// required: true
	},
	jobTitle: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	interview: {
		type: Boolean,
		default: false,
	},
	hasContact: {
		type: Boolean,
		default: false
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
	appliedDate: {
		type: Date,
		default: Date.now()
	},
	interviewDate: {
		type: Date,
	},
	interviewTime: {
		type: String
	},
	location: {
		type: String
	}
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Job