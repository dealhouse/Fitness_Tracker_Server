import React, {useState, useEffect}from 'react'
import { connect } from "react-redux";
import { PullExercise, RemoveExercise, EditExercise } from '../../actions/ExerciseAction';
import { useParams } from 'react-router-dom';

const mapStateToProps = ({ exerciseState }) => {
    return {exerciseState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExercise: () => dispatch(PullExercise()),
        removeExercise: (id) => dispatch(RemoveExercise(id)),
        updateExercise: (id, data) => dispatch(EditExercise(id, data))
    }
}
const Exercises = (props) => {
    let {id} = useParams()
    useEffect(() => {
        props.fetchExercise()
    }, [clicked])
    const [clicked, setClicked] = useState(0)
    return (
        <div>
            <h2>Exercises</h2>
            {/* <form onSubmit={(e) => handleSubmit(e, updating)}> */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Repetitions</th>
                        <th>Sets</th>
                        <th>Weight</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.exerciseState.exercises.filter(exercise => exercise.plan === parseInt(id)).map((exercise) => (
                        // updating !== plan.id ?
                        <tr key={exercise.id}>
                            <td>{exercise.id}</td>
                            <td>{exercise.name}</td>
                            <td>{exercise.type}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.repetitions}</td>
                            <td>{exercise.sets}</td>
                            <td>{exercise.weight}</td>
                            {/* <td><button onClick={(e) => handleClickEd(e, plan)} className='btn btn-primary btn sm'>Edit</button></td>
                            <td><button onClick={(e) => handleClickDel(e, plan.id)} className='btn btn-danger btn sm'>Delete</button></td> */}
                        </tr> 
                        // :  
                        // <tr>
                        //     <td>
                        // <div className="form-group">
                        //     <label>Name</label>
                        //     <input
                        //     className="form-control"
                        //     type="text"
                        //     name="name"
                        //     onChange={handleChange}
                        //     value={formValues.name}
                        //     />
                        // </div>
                        // </td>
                        // <td>
                            
                        // <div className="form-group">
                        //     <label>Type</label>
                        //     <input
                        //     className="form-control"
                        //     type="text"
                        //     name="type"
                        //     onChange={handleChange}
                        //     value={formValues.type}
                        //     />
                        // </div>
                        // </td>
                        // <td>

                        // <div className="form-group">
                        //     <label>Duration</label>
                        //     <input
                        //     className="form-control"
                        //     type="text"
                        //     name="duration"
                        //     onChange={handleChange}
                        //     value={formValues.duration}
                        //     />
                        // </div>
                        // </td>
                        // <td>
                        // <div className="form-group">
                        //     <button type="submit" className="btn btn-primary">
                        //     Submit
                        //     </button>
                        // </div>
                        //     </td>
                        // </tr>
                    ))}
                </tbody>
            </table>
                    {/* </form> */}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);