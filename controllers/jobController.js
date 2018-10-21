const db = require('../models')
const User = require('../models/User')
const Job = require('../models/Job')


const jobController = {
    async add(id, jobDetails) {
		try {
		const job = await db.Job.create(jobDetails)
		console.log(job._id)
		console.log(id)
		const user = await db.User.findByIdAndUpdate({_id: id}, {$push: {job: job._id}}, {new: true})
		
		return user
		} catch(err) {
			throw err
		}
    },
    async getAll() {
		try {
        const jobs = await db.Job.find()
		return jobs
		} catch(err) {
			throw err
		}
    },
    async getOne(id) {
		try {
        const job = await db.Job.findById(id)
		return job
		} catch(err) {
			throw err
		}
	},
    async update(id, update) {
		try {
			const job = await db.Job.findByIdAndUpdate(id, {$set: update})
			return job
		} catch(err) {
			throw err
		}
    },
    async delete(id) {
		try {
        let deleted = await db.Job.deleteOne(id)
		return deleted
		} catch(err) {
			throw err
		}
    }
}

module.exports = jobController