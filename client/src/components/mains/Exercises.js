import React, {useState, useEffect}from 'react'
import { connect } from "react-redux";
import { PullExercise, RemoveExercise, EditExercise } from '../../actions/ExerciseAction';
import { PullPlans } from '../../actions/PlansAction';
import { useParams } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';

const mapStateToProps = ({ exerciseState, planState }) => {
    return {exerciseState, planState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlans: () => dispatch(PullPlans()),
        fetchExercise: () => dispatch(PullExercise()),
        removeExercise: (id) => dispatch(RemoveExercise(id)),
        updateExercise: (id, data) => dispatch(EditExercise(id, data))
    }
}
const Exercises = (props) => {
    let {id} = useParams()
    useEffect(() => {
        props.fetchExercise(),
        props.fetchPlans()
    }, [clicked])
    const [clicked, setClicked] = useState(0)
    const [updating, setUpdating] = useState()
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        description: '',
        repetitions: '',
        sets: '',
        weight: '',
        plan: parseInt(id)
    })
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.updateExercise(id, formValues)
        setFormValues(
            {
                name: '',
                type: '',
                description: '',
                repetitions: '',
                sets: '',
                weight: '',
                plan: parseInt(id)
            })
        setUpdating()
        setClicked((prev) => prev + 1)
    }
    
    const handleClickEd = (e, exercise) => {
        e.preventDefault()
        setUpdating(exercise.id)
        setFormValues({
                name: exercise.name,
                type: exercise.type,
                description: exercise.description,
                repetitions: exercise.repetitions,
                sets: exercise.sets,
                weight: exercise.weight,
                plan: parseInt(id)
        })

    }
    const handleClickDel = (e, id) => {
        e.preventDefault()
        props.removeExercise(id)
    }

    const currentPlan = props.planState.plans.filter(plan => 
        parseInt(plan.id) === parseInt(id)
    )
    console.log(currentPlan)
    return (
        <div>
            <h1>{currentPlan.length !== 0 && currentPlan[0].name}</h1>
            <h2>Exercises</h2>
            <form onSubmit={(e) => handleSubmit(e, updating)}>
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
                        updating !== exercise.id ?
                        <tr key={exercise.id}>
                            <td>{exercise.id}</td>
                            <td>{exercise.name}</td>
                            <td>{exercise.type}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.repetitions}</td>
                            <td>{exercise.sets}</td>
                            <td>{exercise.weight}</td>
                            <td><button onClick={(e) => handleClickEd(e, exercise)} className='btn btn-primary btn sm'>Edit</button></td>
                            <td><button onClick={(e) => handleClickDel(e, exercise.id)} className='btn btn-danger btn sm'>Delete</button></td>
                        </tr> 
                        :  
                        <tr>
                            <td>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formValues.name}
                            />
                        </div>
                        </td>
                        <td>
                            
                        <div className="form-group">
                            <label>Type</label>
                            <input
                            className="form-control"
                            type="text"
                            name="type"
                            onChange={handleChange}
                            value={formValues.type}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Description</label>
                            <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={handleChange}
                            value={formValues.description}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Repetitions</label>
                            <input
                            className="form-control"
                            type="number"
                            name="repetitions"
                            onChange={handleChange}
                            value={formValues.repetitions}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Sets</label>
                            <input
                            className="form-control"
                            type="number"
                            name="sets"
                            onChange={handleChange}
                            value={formValues.sets}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Weight</label>
                            <input
                            className="form-control"
                            type="number"
                            name="weight"
                            onChange={handleChange}
                            value={formValues.weight}
                            />
                        </div>
                        </td>
                        <td>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    </form>
                    <ExerciseForm/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);