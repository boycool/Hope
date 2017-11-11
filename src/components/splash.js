import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Image,
   AppRegistry 
} from 'react-native';

export default class Splash extends Component {
    render(){
        return (
            
            <View style = {styles.container}>
                    <Image source={require('../background.png')} style={styles.backgroundImage} />          
                    <View> 
                        <Text style = {styles.footer}> Powered by SAP India </Text>
                    </View>
                    
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    title : {
        fontSize : 45,
        fontWeight: 'bold',
        color : '#1b789f'
    },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    },
    footer : {
        fontSize : 20,
        fontWeight: '200'
    }
});