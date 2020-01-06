import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import TimeList from "./TimeList";
import TimerContent from "./TimerContent";
import TimerButton from "./TimerButton";

const DATA = [
    {
        title: 'Monday - 2019-12-30',
        data: [
            {
                day: 'Mon',
                start: '11:10',
                end: '11:50',
                total: '00:40'
            },
            {
                day: 'Mon',
                start: '11:10',
                end: '11:50',
                total: '00:40'
            },
        ],
    }
];

const Intro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.sub}>
                <View style={styles.counter}>
                    <TimerContent/>
                    <TimerButton/>
                </View>

                <TimeList data={DATA}/>
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
        backgroundColor: "white",
        width: "100%",
        padding: 10,
        margin: 10,
        borderRadius: 2,
        borderWidth: 0.1,
        borderColor: "grey"
    },
});
