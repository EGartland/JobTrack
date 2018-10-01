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
}

export default API