import {AppNavigator} from '../components/Nav';
import * as ActionTypes from '../actions/ActionTypes';


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Hope'));

const navReducer =  (state = initialState , action = {} ) => {
    if(action.type == ActionTypes.NAVIGATION_PUSH){
        return AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(action.payload.key));
    }
    return state;
};

export default navReducer; 