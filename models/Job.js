const mongoose = require('mongoose')

const Schema = mongoose.Schema

const JobSchema = new Schema({
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
	
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Job