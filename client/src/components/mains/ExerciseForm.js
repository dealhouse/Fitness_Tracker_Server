import React, {useState} from 'react'
import { AddExercise } from '../../actions/ExerciseAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => {
    return {
        makeExercise: (data) => dispatch(AddExercise(data)),
        
    }
}

const ExerciseForm = (props) => {
    let {id} = useParams()
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
    const handleSubmit = (e) => {
        e.preventDefault()
        props.makeExercise(formValues)
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
    }
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
                      
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                        </form>
                            </div>
    );
}

export default connect(null, mapDispatchToProps)(ExerciseForm);