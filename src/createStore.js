import { createStore, applyMiddleware, combineReducers } from 'redux';
import navReducer from './reducers/navReducer';
import thunkMiddleware from 'redux-thunk';


const appReducer = combineReducers({
     nav: navReducer,
});

const store = createStore(
        appReducer,
        applyMiddleware(
            thunkMiddleware)
);

export default () => {
    return store;
}