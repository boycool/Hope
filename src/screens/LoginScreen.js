import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
export default () => {
    return (<View style={style.loginView}>
                
                <View>
                    <Text style={style.headerText}>Hope</Text>
                </View>
                
                <View style={style.boxView}>
                <TextInput style = {style.textInput} placeholder = "Username"/>
                <TextInput style = {style.textInput} placeholder = "Password"/>
                <Button title="Login" />
                </View>
            </View>)
}

const style = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 50
    },
    headerText:{
        fontSize : 50,
        marginLeft:130,
    },
    textInput:{
        height : 50,
    },
    boxView: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical:100,
        marginLeft:10,
        marginRight:10 
    }
});