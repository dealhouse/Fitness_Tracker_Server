import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { Logout } from '../../actions/AuthAction';
const Header = (props) => {

    const handleLog = (e) => {
        e.preventDefault()
        props.logout()
    }
    return (
        <div style={{height: '50px'}}>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Fitness Tracker</a>
                    <strong className='text-light'>
                                {props.authState.user ? `Welcome ${props.authState.user.username}`: ""}
                    </strong>
                    </div>
                    {props.authState.isAuthenticated ? 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <Link to="/tracking" className='nav-link text-light'>Tracking</Link>
                        </li>
                        <li className='nav-item'>
                            <button onClick={handleLog} className='nav-link btn btn-info btn-sm text-light'>Logout</button>
                        </li>
                    </ul> : 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link text-light'>Register</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/login" className='nav-link trxt-light'>Login</Link>
                        </li>
                    </ul>}
                </div>
            </nav>
        </div>
    );
}
const mapStateToProps = ({ authState }) => {
    return {authState}
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(Logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);