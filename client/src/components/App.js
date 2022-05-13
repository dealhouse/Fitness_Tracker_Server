import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './mains/Dashboard';
import Login from './auths/Login';
import Register from './auths/Register';
import PrivateRoutes from './auths/PrivateRoutes';
import { LoadUser } from '../actions/AuthAction';

import {Provider} from 'react-redux'
import store from '../store'

const App = () => {
    useEffect(() => {
        store.dispatch(LoadUser())
    }, [])
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <div className='container'>
                        <Routes>
                            <Route path="/" element={
                                <PrivateRoutes 
                                element={
                                    <Dashboard/>
                                }
                                />
                            }/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;