import axios from 'axios'
import { GetUser, LoginCheck } from '../services/AuthService'
import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS} from './types'

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
export const LoginAction = (username, password) => {
    return async (dispatch) => {
    try {
        console.log('logged')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const body = JSON.stringify({username, password})
        const res = await LoginCheck(body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
        console.log('hello')
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
        console.log(error)
        throw error
    }
}}