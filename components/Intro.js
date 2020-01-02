import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import TimeList from "./TimeList";

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
                <TouchableOpacity style={styles.counterClock}>
                    <Text style={styles.counterText}>0:00:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.counterButton} onPress={() => navigation.navigate('History')}>
                    <Text style={styles.counterButtonText}>
                        Go to Details
                    </Text>
                </TouchableOpacity>
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
    counterClock: {
        flex: 3,
        minWidth: 300,
        minHeight: 300,
        borderRadius: 255,
        backgroundColor: "#7263",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: "grey",
        borderWidth: 6,
        marginTop: 15,
        marginBottom: 15,
    },
    counterText: {
        alignSelf: "center",
        fontSize: 75,
    },
    counterButton: {
        flex: 1,
        backgroundColor: "#34baeb",
        alignContent: "center",
        justifyContent: "center",
        minHeight: 40,
        borderRadius: 10,
        marginBottom: 20
    },
    counterButtonText: {
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 10,
    }
});
