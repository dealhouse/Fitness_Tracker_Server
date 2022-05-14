import { GET_TRACKING, DELETE_TRACKING, CREATE_TRACKING, EDIT_TRACKING } from "./types";
import { GetTrack, DeleteTrack, CreateTrack, UpdateTrack } from "../services/TrackingService";

export const PullTracks = () => {
    return async (dispatch, getState) => {
        try {
        const token = getState().authState.token;
    
        // Headers
        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
    
        // If token, add to headers config
        if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
            const tracks = await GetTrack(config)
            dispatch({
                type: GET_TRACKING,
                payload: tracks
            })
        } catch (error) {
            throw error
        }
    }
}
export const RemoveTracks = (id) => {
    return async (dispatch, getState) => {
        try {
        const token = getState().authState.token;
    
        // Headers
        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
    
        // If token, add to headers config
        if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        }
            await DeleteTrack(id, config)
            dispatch({
                type: DELETE_TRACKING,
                payload: id
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddTrack = (data) => {
    return async (dispatch, getState) => {
        try {
        const token = getState().authState.token;
    
        // Headers
        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
    
        // If token, add to headers config
        if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        }
            const track = await CreateTrack(data, config)
            dispatch({
                type: CREATE_TRACKING,
                payload: track
            })
        } catch (error) {
            throw error
        }
    }
}

export const EditTrack = (id, data) => {
    return async (dispatch, getState) => {
        try {
        const token = getState().authState.token;
    
        // Headers
        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
    
        // If token, add to headers config
        if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        }
            const track = await UpdateTrack(id, data, config)
            dispatch({
                type: EDIT_TRACKING,
                payload: {...data, id: id}
            })
            return Promise.resolve(data)
        } catch (error) {
            throw error
        }
    }
}