import * as ActionTypes from './ActionTypes';
import HopeScreen from '../screens/Hope';
import LoginScreen from '../screens/LoginScreen';


export const navigationPush = (key,params={}) => ({
    type : ActionTypes.NAVIGATION_PUSH,
    payload : {key,params}
});

export const navigationPop = () => ({
    type : ActionTypes.NAVIGATION_POP
})

export const navigationStart = () => ({
    type: ActionTypes.NAVIGATION_START
})

export const navigationReset = () => ({
    type: ActionTypes.NAVIGATION_RESET
})

export const navigateToLoginScreen = () => (dispatch) => {
    dispatch(navigationPush('Login'));
}

export const AppNavigationConfig = {
    Hope : {
        screen : HopeScreen
    },
    Login : {
        screen : LoginScreen,
        navigationOptions: {title: 'Login'}
    }
};