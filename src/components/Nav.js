import React,{Component} from 'react';
import {AppNavigationConfig} from '../actions/NavigationAction';
import {StackNavigator,addNavigationHelpers} from 'react-navigation';
import HopeScreen from '../screens/Hope';

export const AppNavigator = StackNavigator(AppNavigationConfig);

class Nav extends Component {
    
    render(){
        return (

           <AppNavigator navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav,
                  login: this.props.login
            }) }  screenProps={this.props}/>
        )
    }
}

export default Nav;
