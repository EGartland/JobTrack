import axios from 'axios'

const API = {
	async register(name, pass) {
		try {
			let { data } = await axios.post('/register', { niceName: name, password: pass})
			return data
		} catch(err) {
			throw err
		}
	},
	async login(name, pass) {
		try {
			let { data } = await axios.post('/login', { niceName: name, password: pass})
			return data
		} catch(err) {
			throw err
		}
	},
	async addJob(uid, jobDetails) {
		try {
			let { data } = await axios.post('/job', {uid, jobDetails})
			return data
		} catch(err) {
			throw err
		}
	},
	async updateJob(uid, jobId, update) {
		try {
			let { data } = await axios.put(`/job/${jobId}`, {uid, update})
			return data
		} catch(err) {
			throw err
		}
	},
	async deleteJob(uid, jobId) {
		try {
			let { data } = await axios.delete(`/job/${jobId}`)
			return data	
		} catch (err) {
			throw err
		}
	},
	async getJob(jobId) {
		try {
			let { data } = await axios.get(`/job/${jobId}`)
			return data			
		} catch (err) {
			throw err
		}
	},
	async getUser(uid) {
		try {
			let { data } = await axios.get(`/user/${uid}`)
			return data
		} catch (err) {
			throw err
		}
	}
}

export default API