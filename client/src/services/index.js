import axios from 'axios'

const Client = axios.create({baseURL: 'http://127.0.0.1:3000/api'})

export default Client