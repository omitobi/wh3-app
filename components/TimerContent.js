import React, {useEffect, useState} from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";

const TimerContent = () => {
    return (
        <TouchableOpacity style={styles.counterClock}>
            <Text style={styles.counterText}>0:00:00</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default TimerContent;
