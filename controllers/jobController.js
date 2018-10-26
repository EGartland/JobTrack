const db = require('../models')

const jobController = {
    async add(uid, jobDetails) {
		try {
			jobDetails.uid = uid
			const job = await db.Job.create(jobDetails)
			console.log(job.uid)
			const user = await db.User.findOneAndUpdate({_id: uid}, {$push: { job: job._id}}, { new: true })
			console.log(user)
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
			const job = await db.Job.findOneAndUpdate({_id: id}, {$set: update})
        	return job
		} catch (err) {
			throw err
		}
    },
    async delete(id) {
		try {
			let deletedJob = await db.Job.findOneAndRemove({_id: id})
			return deletedJob
		} catch(err) {
			throw err
		}
    }
}

module.exports = jobController