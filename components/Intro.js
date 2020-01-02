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
            }
        ],
    }
];

const Intro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <TimerContent />
                <TimerButton />
            </View>

            <TimeList data={DATA}/>
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
        alignItems: "center",
        justifyContent: "center",
    },
    counter: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red"
    },
});
