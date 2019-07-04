import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
// main app component
import App from './App';
// main todo reducer
import ninjaGoldApp from './reducers/root/ninjaGoldApp';

ReactDOM.render(            
    <Provider store={createStore(ninjaGoldApp)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);