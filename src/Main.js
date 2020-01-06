import React, {Component} from 'react';
import {Button, Platform} from 'react-native';
import Intro from "./components/Intro";
import History from "./components/History";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {IconButton, Colors} from 'react-native-paper';
import Profile from "./components/Profile";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

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


const MainBottomNavigator = createMaterialBottomTabNavigator(
    {
        Intro: {
            screen: Intro,
            navigationOptions: {
                title: "Home",
                tabBarIcon: <IconButton icon="home" color={Colors.white} size={16}/>,
                fontWeight: "bold",
            }
        },
        History: {
            screen: History,
            navigationOptions: {
                title: "History",
                fontWeight: "bold",
                tabBarIcon: <IconButton icon="history" color={Colors.white} size={16}/>,
            }
        },
        profile: {
            screen: Profile,
            navigationOptions: {
                title: "Profile",
                fontWeight: "bold",
                tabBarIcon: <IconButton icon="account" color={Colors.white} size={16}/>,
            }
        }
    },
    {
        initialRouteName: 'Intro',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: {
            // backgroundColor: '#694fad',
            backgroundColor: '#3486eb',
        },
        // labeled: false,
    }
);

const MainContainer = createAppContainer(MainBottomNavigator);

class Main extends Component {
    render() {
        return (
            <MainContainer/>
        );
    }
}

export default Main;
