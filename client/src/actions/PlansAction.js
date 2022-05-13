import { GET_PLANS, DELETE_PLANS, CREATE_PLAN, EDIT_PLAN } from "./types";
import axios from 'axios'
import {GetPlans, DeletePlan, CreatePlan, UpdatePlan} from '../services/PlansService'


export const PullPlans = () => {
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
            const plans = await GetPlans(config)
            dispatch({
                type: GET_PLANS,
                payload: plans
            })
        } catch (error) {
            throw error
        }
    }
}
export const RemovePlans = (id) => {
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
            await DeletePlan(id, config)
            dispatch({
                type: DELETE_PLANS,
                payload: id
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddPlan = (data) => {
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
            const plan = await CreatePlan(data, config)
            dispatch({
                type: CREATE_PLAN,
                payload: plan
            })
        } catch (error) {
            throw error
        }
    }
}

export const EditPlan = (id, data) => {
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
            const plan = await UpdatePlan(id, data, config)
            dispatch({
                type: EDIT_PLAN,
                payload: {...data, id: id}
            })
            return Promise.resolve(data)
        } catch (error) {
            throw error
        }
    }
}

