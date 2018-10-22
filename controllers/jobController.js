const db = require('../models')

const jobController = {
    async add(uid, jobDetails) {
		try {
			jobDetails.uid = uid
			const job = await db.Job.create(jobDetails)
			await db.User.findOneAndUpdate(uid, {$push: { job: job._id}}, { new: true })
			return job
		} catch(err) {
			return err
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
			console.log('update', update)
			const job = await db.Job.findOneAndUpdate(id, {$set: update})
        	return job
		} catch (err) {
			throw err
		}
    },
    async delete(id) {
		try {
			let deletedJob = await db.Job.findOneAndRemove(id)
			return deletedJob
		} catch(err) {
			throw err
		}
    }
}

module.exports = jobController