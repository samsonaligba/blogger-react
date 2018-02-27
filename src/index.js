import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    allReducers, 
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    composeEnhancers(applyMiddleware(logger, thunk))
    /*,
    window.devToolsExtension && window.devToolsExtension()*/
);
/*
console.log(store.getState()); 

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'John'
    }
}

store.dispatch(updateUserAction);
*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
