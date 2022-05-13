import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { LoginAction } from '../../actions/AuthAction'
import { Navigate } from 'react-router-dom'

const Login = (props) => {

    const [formValues, setFormValues] = useState({
        name: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.log(formValues.name, formValues.password)
        setFormValues({
            name: '',
            password: '',
        })
    }
    return (
        <div>
            {props.authState.isAuthenticated ? <Navigate to="/"/> : 
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
            <h2 className="text-center">Login</h2>
            <form className="col" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                <input
                    className='form-control'
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formValues.name}
                    required
                />
                </div>
    
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                <input
                    className='form-control'
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={formValues.password}
                    required
                />
                </div>
                <button>
                Login
                </button>
            </form>
            </div>
        </div>
        }
        </div>
    )
}
const mapStateToProps = ({ authState }) => {
    return {authState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        log: (username, password) => dispatch(LoginAction(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);