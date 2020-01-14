import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import TimeList from "./TimeList";
import TimerContent from "./TimerContent";
import TimerButton from "./TimerButton";
import TimeLogStore from "../stores/TimeLogStore";


const Intro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.sub}>
                <View style={styles.counter}>
                    <TimerContent/>
                </View>
            </View>
        </View>
    );
};
export default Intro;

Intro.navigationOptions = screenProps => ({
    title: "Home"
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        marginTop: Constants.statusBarHeight,
    },
    sub: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
    },
    counter: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        // alignContent: "center",
        // alignSelf: "center",
        width: "100%",
        margin: 10,
    },
});
