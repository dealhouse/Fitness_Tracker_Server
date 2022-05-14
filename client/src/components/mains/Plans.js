import React, {useState, useEffect}from 'react'
import { connect } from 'react-redux'
import { PullPlans, RemovePlans, EditPlan } from '../../actions/PlansAction';


const mapStateToProps = ({ planState }) => {
    return {planState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlans: () => dispatch(PullPlans()),
        removePlan: (id) => dispatch(RemovePlans(id)),
        updatePlan: (id, data) => dispatch(EditPlan(id, data))
    }
}
const Plans = (props) => {
    useEffect(() => {
        props.fetchPlans()
    }, [clicked])
    const [updating, setUpdating] = useState()
    const [clicked, setClicked] = useState(0)
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        duration: ''
    })
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }
    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.updatePlan(id, formValues)
        setFormValues(
            {
                name: '',
                type: '',
                duration: ''
            })
        setUpdating()
        setClicked((prev) => prev + 1)
        console.log(clicked)
    }
    
    const handleClickEd = (e, plan) => {
        e.preventDefault()
        setUpdating(plan.id)
        setFormValues({
            name: plan.name,
            type: plan.type,
            duration: plan.duration
        })

    }
    const handleClickDel = (e, id) => {
        e.preventDefault()
        props.removePlan(id)
    }
    return (
        <div>
            <h2>Plans List </h2>
                    <form onSubmit={(e) => handleSubmit(e, updating)}>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.planState.plans.map((plan) => (
                        updating !== plan.id ?
                        <tr key={plan.id}>
                            <td>{plan.id}</td>
                            <td>{plan.name}</td>
                            <td>{plan.type}</td>
                            <td>{plan.duration}</td>
                            <td><button onClick={(e) => handleClickEd(e, plan)} className='btn btn-primary btn sm'>Edit</button></td>
                            <td><button onClick={(e) => handleClickDel(e, plan.id)} className='btn btn-danger btn sm'>Delete</button></td>
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
                            <label>Duration</label>
                            <input
                            className="form-control"
                            type="text"
                            name="duration"
                            onChange={handleChange}
                            value={formValues.duration}
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
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)