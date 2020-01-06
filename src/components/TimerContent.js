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
        // backgroundColor: "#7263",
        justifyContent: "center",
        // marginTop: 15,
        // marginBottom: 15,
    },
    counterText: {
        alignSelf: "center",
        fontSize: 80,
    },
});

export default TimerContent;
