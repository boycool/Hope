import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Hope from './screens/Hope';
import NavContainer from './containers/NavContainer';
import createStore from './createStore';

/**
 *  App.js is entry point for this application.
 *  It would first take user to Splash screen.
 *  
 *  
 */


const App = () => {

    const store = createStore();
    return (
        <Provider store={store}>
            <NavContainer />
        </Provider>
    )
    // return (<Hope/>)
};

export default App;