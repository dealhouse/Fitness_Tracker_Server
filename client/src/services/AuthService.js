import Client from './index'

export const GetUser = async (config) => {
    try {
        const res = await Client.get('/auth/user', config)
        return res.data
    } catch (error) {
        throw error
    }
}
export const LoginCheck = async (body, config) => {
    try {
        const res = await Client.post('/auth/login', body, config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const LogoutService = async (config) => {
    try {
        const res = await Client.post('/auth/logout', {}, config)
        return res.data
    } catch (error) {
        throw error
    }
}