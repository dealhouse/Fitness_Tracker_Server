import Client from './index'

export const GetExercises = async () => {
    try {
        const res = await Client.get('/exercise')
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteExercise = async (id) => {
    try {
        await Client.delete(`/exercise/${id}/`)
        return console.log(`${id} was deleted`)
    } catch (error) {
        throw error
    }
}

export const CreateExercise = async (data) => {
    try {
        const res = await Client.post('/exercise/', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateExercise = async (id, data) => {
    try {
        const res = await Client.put(`/exercise/${id}/`, data)
        return res.data
    } catch (error) {
        throw error
    }
} 