import Client from './index'

export const GetPlans = async () => {
    try {
        const res = await Client.get('/plan')
        return res.data
    } catch (error) {
        throw error
    }
}
export const DeletePlan = async (id) => {
    try {
        await Client.delete(`/plan/${id}/`)
        return console.log(`${id} was deleted`)
    } catch (error) {
        throw error
    }
}

export const CreatePlan = async (data) => {
    try {
        const res = await Client.post('/plan/', data)
        return res.data
    } catch (error) {
        throw error
    }
}