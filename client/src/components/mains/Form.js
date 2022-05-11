import React, {useState} from 'react'
import { AddPlan } from '../../actions/PlansAction'
import axios from 'axios'
import { connect } from 'react-redux'

const mapStateToProps = ({ planState }) => {
    return {planState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        makePlan: (data) => dispatch(AddPlan(data)),
        
    }
}

const Form = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        duration: ''
    })
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.makePlan(formValues)
        setFormValues(
            {
                name: '',
                type: '',
                duration: ''
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
                    <label>Duration</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="duration"
                    onChange={handleChange}
                    value={formValues.duration}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Form);