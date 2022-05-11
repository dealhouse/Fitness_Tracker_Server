import React from 'react'
import Header from './layout/Header'
import Dashboard from './mains/Dashboard';

import {Provider} from 'react-redux'
import store from '../store'

const App = () => {
    return (
        <Provider store={store}>
        <div>
            <Header/>
            <Dashboard/>
        </div>
        </Provider>
    );
}

export default App;