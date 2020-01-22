import React, { useReducer } from 'react';
import {Text, View, StyleSheet} from "react-native";
import {TimeContext} from "../contexts/TimeContext";
import {CounterReducer} from "../reducers/CounterReducer";

const TimeHead = () => {
    const {fullTimeString, dispatch} = useReducer(CounterReducer, '0:00:00');
    console.log((fullTimeString === "0:00:00"));

    return (
        fullTimeString && fullTimeString !== "0:00:00"
            ? <View style={styles.head}>
                <Text style={styles.headText}>{fullTimeString}</Text>
            </View> : null
    )
};

export default TimeHead;

const styles = StyleSheet.create({
    head: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: "steelblue",
        height: 30,
    },
    headText: {
        fontSize: 16,
        color: "white",
    },
});
