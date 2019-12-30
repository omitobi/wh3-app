import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Intro from "./components/Intro";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import History from "./components/History";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator({
      Intro: Intro,
      History: History,
    },
    {
        initialRouteName: 'Intro',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
