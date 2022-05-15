import { CREATE_EXERCISE, DELETE_EXERCISE, EDIT_EXERCISE, GET_EXERCISES } from '../actions/types.js'

const initialState = {
    exercises: []
}

const ExerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXERCISES:
            return {...state, exercises: action.payload}
        case DELETE_EXERCISE:
            return {...state, exercises: state.exercises.filter((exercise) => exercise.id !== action.payload)}
        case CREATE_EXERCISE:
            return {...state, exercises: [...state.exercises, action.payload]}
        case EDIT_EXERCISE:
            return {...state, exercises: state.exercises.map((exercise) => {
                if (exercise.id === action.payload.id) {
                    return {
                        ...exercise,
                        ...action.payload
                    }
                }
                else {
                    return exercise
                }
            })}
        default: 
            return {...state}
    }
}

export default ExerciseReducer;
