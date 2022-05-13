import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {}
const mapStateToProps = ({ authState }) => {
    return {authState}
}

const Register = (props) => {
    console.log(props.authState.isLoading)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
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

export default connect(mapStateToProps)(Register);