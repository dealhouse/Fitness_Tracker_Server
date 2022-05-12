import React, {useState} from 'react'


const Login = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        password: '',
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
        <h2 className="text-center">Login</h2>
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
    )
}

export default Login;