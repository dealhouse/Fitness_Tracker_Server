import { GET_PLANS } from "./types";
import axios from 'axios'
import {GetPlans} from '../services/PlansService'

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