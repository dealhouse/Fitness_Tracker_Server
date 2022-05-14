import Client from "./index";

export const GetTrack = async (config) => {
    try {
        const res = await Client.get('/tracking', config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteTrack = async (id, config) => {
    try {
        await Client.delete(`/tracking/${id}/`, config)
        return console.log(`${id} was deleted`)
    } catch (error) {
        throw error
    }
}

export const CreateTrack = async (data, config) => {
    try {
        const res = await Client.post('/tracking/', data, config)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateTrack = async (id, data, config) => {
    try {
        const res = await Client.put(`/tracking/${id}/`, data, config)
        return res.data
    } catch (error) {
        throw error
    }
} 