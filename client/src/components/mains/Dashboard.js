import Form from './Form'
import Plans from './Plans'
import React, {useEffect} from 'react'

const Dashboard = () => {
    
    return (
        <div div className="col-md-10 m-auto">
            <div className='className="card card-body mt-5"'>
            <h2>New Plan</h2>
            <Form />
            </div>
            <Plans />
        </div>
    )
}

export default Dashboard;