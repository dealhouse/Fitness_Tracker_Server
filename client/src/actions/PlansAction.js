import { GET_PLANS, DELETE_PLANS } from "./types";
import axios from 'axios'
import {GetPlans, DeletePlan} from '../services/PlansService'

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