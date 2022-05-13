import axios from 'axios'
import { GetUser } from '../services/AuthService'
import {USER_LOADED, USER_LOADING, AUTH_ERROR} from './types'

export const LoadUser = () => {
    return async (dispatch, getState) => {
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

        const res = await GetUser(config)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}}