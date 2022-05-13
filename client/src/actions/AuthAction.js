import axios from 'axios'
import {USER_LOADED, USER_LOADING, AUTH_ERROR} from './types'

export const LoadUser = async () => (dispatch, getState) => {
    try {
        dispatch({type: USER_LOADING})

        const token = getState().authState.token

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(token) {
            config.headers['Authorization'] = `Token ${token}`
        }

        const res = await axios.get('api/auth/user', config)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}