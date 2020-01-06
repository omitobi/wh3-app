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
        backgroundColor: "#34baeb",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "grey",
        borderRadius: 2,
        borderWidth: 0.3,
        // borderRadius: 10,
        minHeight: 50,

    },
    counterButtonText: {
        fontSize: 20,
        // marginHorizontal: 10,
    }
});

export default TimerButton;
