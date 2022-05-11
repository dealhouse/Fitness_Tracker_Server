import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import PlansReducer from './reducers/plans'

const initialState = {}


const store = createStore(
    combineReducers({
        reducer: rootReducer,
        planState: PlansReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store