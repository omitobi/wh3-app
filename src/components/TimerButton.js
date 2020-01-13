import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";

const TimerButton = ({started, toggleTimer}) => {
    return (
        <View>
            {
                started
                    ? <TouchableOpacity style={[styles.counterButton, {backgroundColor: "red",}]} color="secondary"
                                        onPress={() => toggleTimer('stop')}>
                        <Text style={[styles.counterButtonText, {color: "white",}]}>Stop Timer</Text>
                    </TouchableOpacity>
                    : <TouchableOpacity style={styles.counterButton} color="secondary"
                                        onPress={() => toggleTimer('start')}>
                        <Text style={styles.counterButtonText}>Start Timer</Text>
                    </TouchableOpacity>
            }
        </View>

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
