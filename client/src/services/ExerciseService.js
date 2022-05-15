import Client from './index'

export const GetExercises = async (config) => {
    try {
        const res = await Client.get('/exercise', config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteExercise = async (id, config) => {
    try {
        await Client.delete(`/exercise/${id}/`, config)
        return console.log(`${id} was deleted`)
    } catch (error) {
        throw error
    }
}

export const CreateExercise = async (data, config) => {
    try {
        const res = await Client.post('/exercise/', data, config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateExercise = async (id, data, config) => {
    try {
        const res = await Client.put(`/exercise/${id}/`, data, config)
        return res.data
    } catch (error) {
        throw error
    }
} 