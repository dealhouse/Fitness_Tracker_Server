import React, {useEffect}from 'react'
import { connect } from 'react-redux'
import { PullPlans, RemovePlans } from '../../actions/PlansAction';

const mapStateToProps = ({ planState }) => {
    return {planState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlans: () => dispatch(PullPlans()),
        removePlan: (id) => dispatch(RemovePlans(id))
    }
}
const Plans = (props) => {
    useEffect(() => {
        props.fetchPlans()
    }, [])
    
    
    const handleClick = (e, id) => {
        e.preventDefault()
        props.removePlan(id)
    }
    return (
        <div>
            <h2>Plans List </h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.planState.plans.map((plan) => (
                        <tr key={plan.id}>
                            <td>{plan.id}</td>
                            <td>{plan.name}</td>
                            <td>{plan.type}</td>
                            <td>{plan.duration}</td>
                            <td><button onClick={(e) => handleClick(e, plan.id)} className='btn btn-danger btn sm'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)