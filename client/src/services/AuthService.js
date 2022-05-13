import Client from './index'

export const GetUser = async (config) => {
    try {
        const res = await Client.get('/auth/user', config)
        return res.data
    } catch (error) {
        throw error
    }
}