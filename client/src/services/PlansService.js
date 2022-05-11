import Client from './index'

export const GetPlans = async () => {
    try {
        const res = await Client.get('/plan')
        return res.data
    } catch (error) {
        throw error
    }
}