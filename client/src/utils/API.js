import axios from 'axios'

const API = {
    async getTest() {
        try {
            let { data } = await axios.get('/api/test',)
            return data
        } catch(err) {
            throw err
        }
	},
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
	}
}

export default API