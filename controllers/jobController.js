const db = require('../models')

const jobController = {
    async add(uid, jobDetails) {
		const job = await db.Job.create(jobDetails)
		console.log(uid, job._id)
		// console.log(uid)
		const user = await db.User.findOneAndUpdate(uid, {$push: { job: job._id}}, { new: true })
		// console.log(user) // TODO: comment this out
        return job
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
		} catch (error) {
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