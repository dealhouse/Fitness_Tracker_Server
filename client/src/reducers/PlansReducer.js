import { CREATE_PLAN, DELETE_PLANS, EDIT_PLAN, GET_PLANS } from '../actions/types.js'

const initialState = {
    plans: []
}

const PlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLANS:
            return {...state, plans: action.payload}
        case DELETE_PLANS:
            return {...state, plans: state.plans.filter((plan) => plan.id !== action.payload)}
        case CREATE_PLAN:
            return {...state, plans: [...state.plans, action.payload]}
        case EDIT_PLAN:
            return {...state, plans: state.plans.map((plan) => {
                if (plan.id === action.payload.id) {
                    return {
                        ...plan,
                        ...action.payload
                    }
                }
                else {
                    return plan
                }
            })}
        default: 
            return {...state}
    }
}

export default PlansReducer