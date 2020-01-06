import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

const TimerButton = ({started, toggleTimer}) => {
    return (
        <TouchableOpacity style={styles.counterButton}
                          // onPress={() => navigation.navigate('History')}
        >
            <Text style={styles.counterButtonText}>
                Start Timer
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    counterButton: {
        flex: 1,
        backgroundColor: "#34baeb",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 10,

    },
    counterButtonText: {
        fontSize: 20,
        // marginHorizontal: 10,
    }
});

export default TimerButton;
