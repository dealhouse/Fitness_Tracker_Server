import { GET_EXERCISES, DELETE_EXERCISE, CREATE_EXERCISE, EDIT_EXERCISE } from "./types";
import { GetExercises, DeleteExercise, CreateExercise, UpdateExercise } from "../services/ExerciseService";

export const PullExercise = () => {
    return async (dispatch) => {
        try {
            const exercises = await GetExercises()
            dispatch({
                type: GET_EXERCISES,
                payload: exercises
            })
        } catch (error) {
            throw error
        }
    }
}
export const RemoveExercise = (id) => {
    return async (dispatch) => {
        try {
        
            await DeleteExercise(id)
            dispatch({
                type: DELETE_EXERCISE,
                payload: id
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddExercise = (data) => {
    return async (dispatch) => {
        try {
            const exercise = await CreateExercise(data)
            dispatch({
                type: CREATE_EXERCISE,
                payload: exercise
            })
        } catch (error) {
            throw error
        }
    }
}

export const EditExercise = (id, data) => {
    return async (dispatch) => {
        try {
            const exercise = await UpdateExercise(id, data)
            dispatch({
                type: EDIT_EXERCISE,
                payload: {...data, id: id}
            })
            return Promise.resolve(data)
        } catch (error) {
            throw error
        }
    }
}