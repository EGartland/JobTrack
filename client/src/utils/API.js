import axios from 'axios'

const API = {
	async register(name, pass, links) {
		try {
			let { data } = await axios.post('/register', { niceName: name, password: pass, links})
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
	async deleteJob(id) {
		try {
			let { data } = await axios.delete(`/job/${id}`)
			return data
		} catch (err) {
			throw err
		}
	},
	async getUser(id) {
		try {
			let { data } = await axios.get(`/user/${id}`)
			return data
		} catch (err) {
			throw err	
		}
	},
	async getJob(id) {
		try {
			let { data } = await axios.get(`/job/${id}`)
			return data
		} catch (err) {
			throw err	
		}
	},
	async updateJob(id, update) {
		try {
			let { data } = await axios.put(`/job/${id}`, update)
			return data
		} catch (err) {
			throw err	
		}
	},
	async addJob(uid, jobDetails) {
		try {
			let { data } = await axios.post(`/job`, {uid, jobDetails})
			return data
		} catch (err) {
			throw err	
		}
	},
}

export default API