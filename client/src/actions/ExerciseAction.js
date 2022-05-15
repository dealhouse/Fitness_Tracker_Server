import { GET_EXERCISES, DELETE_EXERCISE, CREATE_EXERCISE, EDIT_EXERCISE } from "./types";
import { GetExercises, DeleteExercise, CreateExercise, UpdateExercise } from "../services/ExerciseService";

export const PullTracks = () => {
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
export const RemoveTracks = (id) => {
    return async (dispatch) => {
        try {
        
            await DeleteExercise(id)
            dispatch({
                type: DELETE_TRACKING,
                payload: id
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddTrack = (data) => {
    return async (dispatch) => {
        try {
            const exercise = await CreateExercise(data)
            dispatch({
                type: CREATE_TRACKING,
                payload: exercise
            })
        } catch (error) {
            throw error
        }
    }
}

export const EditTrack = (id, data) => {
    return async (dispatch) => {
        try {
            const exercise = await UpdateTrack(id, data)
            dispatch({
                type: EDIT_TRACKING,
                payload: {...data, id: id}
            })
            return Promise.resolve(data)
        } catch (error) {
            throw error
        }
    }
}