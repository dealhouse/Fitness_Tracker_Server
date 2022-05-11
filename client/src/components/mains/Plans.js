import React, {useEffect}from 'react'
import { connect } from 'react-redux'
import { PullPlans } from '../../actions/PlansAction';

const mapStateToProps = ({ planState }) => {
    return {planState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlans: () => dispatch(PullPlans())
    }
}
const Plans = (props) => {
    useEffect(() => {
        props.fetchPlans()
    }, [])
    
    const plans = props.planState.plans.map((plan) => (
        <div></div>
    ))
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
                    </tr>
                </thead>
                <tbody>
                    {props.planState.plans.map((plan) => (
                        <tr key={plan.id}>
                            <td>{plan.id}</td>
                            <td>{plan.name}</td>
                            <td>{plan.type}</td>
                            <td>{plan.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)