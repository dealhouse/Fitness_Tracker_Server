import { DELETE_PLANS, GET_PLANS } from '../actions/types.js'

const initialState = {
    plans: []
}

const PlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLANS:
            return {...state, plans: action.payload}
        case DELETE_PLANS:
            return {...state, plans: state.plans.filter((plan) => plan.id !== action.payload)}
        default: 
            return {...state}
    }
}

export default PlansReducer