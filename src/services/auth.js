import httpClient from './httpClient'

export async function userRegister(data) {
    const response = await httpClient.post('/users',data)
    return response.data
}

export async function userLogin(data) {
    const response = await httpClient.post('users/login', data)
    return response.data
}