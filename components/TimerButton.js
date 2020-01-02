import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

const TimerButton = ({started, toggleTimer}) => {
    return (
        <TouchableOpacity style={styles.counterButton}
                          // onPress={() => navigation.navigate('History')}
        >
            <Text style={styles.counterButtonText}>
                Go to Details
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

export default TimerButton;
