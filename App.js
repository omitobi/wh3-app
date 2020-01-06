import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Intro from "./components/Intro";
import History from "./components/History";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { IconButton, Colors } from 'react-native-paper';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const Button = <IconButton
    icon="home"
    color={Colors.white}
    size={20}
    onPress={() => console.log('Pressed')}
/>;

const MainNavigator = createStackNavigator({
        Intro: Intro,
        History: History,
    },
    {
        initialRouteName: 'Intro',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


const AppNavigator = createMaterialBottomTabNavigator
(
    {
        Intro: {
            screen: Intro,
            navigationOptions: {
                title: "Home",
                tabBarIcon: <IconButton icon="home" color={Colors.white} size={18} />
            }
        },
        History: {
            screen: History,
            navigationOptions: {
                title: "Home",
                tabBarIcon: <IconButton icon="history" color={Colors.white} size={18}/>,
            }
        },
    },
    {
        initialRouteName: 'Intro',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: {
            // backgroundColor: '#694fad',
            backgroundColor: '#3486eb',

            fontWeight: "bold",
        },
        // labeled: false,
    }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
