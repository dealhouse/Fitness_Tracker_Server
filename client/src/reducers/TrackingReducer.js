import { CREATE_TRACKING, DELETE_TRACKING, EDIT_TRACKING, GET_TRACKING } from '../actions/types.js'

const initialState = {
    tracking: []
}

const TrackingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKING:
            return {...state, tracking: action.payload}
        case DELETE_TRACKING:
            return {...state, tracking: state.tracking.filter((track) => track.id !== action.payload)}
        case CREATE_TRACKING:
            return {...state, tracking: [...state.tracking, action.payload]}
        case EDIT_TRACKING:
            return {...state, tracking: state.tracking.map((track) => {
                if (track.id === action.payload.id) {
                    return {
                        ...track,
                        ...action.payload
                    }
                }
                else {
                    return track
                }
            })}
        default: 
            return {...state}
    }
}

export default TrackingReducer;