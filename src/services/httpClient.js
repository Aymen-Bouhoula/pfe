import axios from 'axios'

const API_URL = 'http://localhost:5000/api'
const httpClient = axios.create({
    baseURL: API_URL
})

httpClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers['x-auth-token'] = token
    }
    return config
})

export default httpClient