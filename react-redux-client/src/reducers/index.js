// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import todoReducer from './todoReducer';

export default combineReducers ({
    appState: appReducer,
    todoState: todoReducer,
    routing
    // If there are more reducers, they go here
})