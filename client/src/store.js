import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import PlansReducer from './reducers/PlansReducer'
import AuthReducer from './reducers/AuthReducer'
import TrackingReducer from './reducers/TrackingReducer'
import ExerciseReducer from './reducers/ExerciseReducer'

// const initialState = {}


const store = createStore(
    combineReducers({
        reducer: rootReducer,
        planState: PlansReducer,
        authState: AuthReducer,
        trackingState: TrackingReducer,
        exerciseState: ExerciseReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store