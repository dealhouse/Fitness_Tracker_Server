import Client from './index'

export const GetPlans = async (config) => {
    try {
        const res = await Client.get('/plan', config)
        return res.data
    } catch (error) {
        throw error
    }
}
export const DeletePlan = async (id, config) => {
    try {
        await Client.delete(`/plan/${id}/`, config)
        return console.log(`${id} was deleted`)
    } catch (error) {
        throw error
    }
}

export const CreatePlan = async (data, config) => {
    try {
        const res = await Client.post('/plan/', data, config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdatePlan = async (id, data, config) => {
    try {
        const res = await Client.put(`/plan/${id}/`, data, config)
        return res.data
    } catch (error) {
        throw error
    }
} 