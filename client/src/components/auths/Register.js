import React, {useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { RegisterAction } from '../../actions/AuthAction'
const mapStateToProps = ({ authState }) => {
    return {authState}
}
const mapDispatchToProps = (dispatch) => {
    return {
        register: (username, password, email) => dispatch(RegisterAction(username, password, email))
    }
}
const Register = (props) => {
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    console.log(formValues)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            username: formValues.name,
            email: formValues.email,
            password: formValues.password
        }
        await props.register(user)
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/login')
    }
    return (
    <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form className="col" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
            <input
                className='form-control'
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
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
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                className='form-control'
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
            />
            </div>   
            <button
            disabled={
                !formValues.email ||
                (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
            >
            Register
            </button>
        </form>
        </div>
    </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);