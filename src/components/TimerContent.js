import React, {useEffect, useState, useReducer} from "react";
import {StyleSheet, View} from "react-native";
import moment from "moment";
import TimerButton from "./TimerButton";
import CountDown from "./CountDown";
import TimeList from "./TimeList";
import {TimeReducer} from "../reducers/TimeReducer";

const getLatestTimeRow = (timeRows) => {

    const latestTimeRow = timeRows[0];

    return latestTimeRow ? latestTimeRow : {
        startTime: null,
        endTime: null
    };
};

const getFirstItem = (timeRows) => {
    return timeRows[getFirstItemKey()];
};

const getFirstItemKey = () => {
    return 0;
};

const TimerContent = () => {
    const [timeRows, dispatch] = useReducer(TimeReducer, [
        {
            day: '6 Mon',
            startTime: '2020-01-15 00:01',
            endTime: null,
            total: 0
        }
    ]);
    const [action, setAction] = useState(null);
    const [at, setAt] = useState(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const latestTimeRow = getLatestTimeRow(timeRows);

        if (latestTimeRow.startTime && !latestTimeRow.endTime) {
            console.log(latestTimeRow);
            const totalSeconds = moment().diff(moment(latestTimeRow.startTime), 'seconds');
            setAction('start');
            setStarted(true);
            setAt(totalSeconds);
        }
    }, []);

    const toggle = (action, time) => {
        console.log('We receive a toggle(action, time)', action, time);

        setAction(action);

        if (action === "start") {
            dispatch({
                type: 'START_TIME',
                time: moment(time)
            });
            setStarted(true);
            setAt(moment().diff(moment(time), 'seconds'));
        }

        if (action === "stop") {
            dispatch({
                type: 'STOP_TIME',
                time: moment(time)
            });
            setStarted(false);
        }
    };

    const getData = () => {
        return [
            {
                title: 'Monday - 2019-12-30',
                data: timeRows
            }
        ]
    };


    return (
        <View style={styles.container}>
            <View style={styles.timer}>
                <CountDown at={at} action={action}/>
                <TimerButton started={started} toggleTimer={toggle}/>
            </View>
            <View style={styles.list}>
                <TimeList data={getData()}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timer: {
        flex: 1,
        padding: 10,
        borderRadius: 2,
        borderWidth: 0.1,
        borderColor: "grey",
        backgroundColor: "white",
    },
    list: {
        flex: 1
    }
});

export default TimerContent;
