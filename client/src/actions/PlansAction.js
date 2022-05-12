import { GET_PLANS, DELETE_PLANS, CREATE_PLAN, EDIT_PLAN } from "./types";
import axios from 'axios'
import {GetPlans, DeletePlan, CreatePlan, UpdatePlan} from '../services/PlansService'


export const PullPlans = () => {
    return async (dispatch) => {
        try {
            const plans = await GetPlans()
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
    return async (dispatch) => {
        try {
            await DeletePlan(id)
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
    return async (dispatch) => {
        try {
            const plan = await CreatePlan(data)
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
    return async (dispatch) => {
        try {
            const plan = await UpdatePlan(id, data)
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

