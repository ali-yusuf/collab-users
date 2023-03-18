import axios from 'axios'

export default {
    async setup() {
        const result = await axios.get('http://localhost:2000/test/')
        console.log(result)
        return { result }
    }
}