import React, {useEffect, useState} from "react";
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import moment from "moment";
import TimeLogStore from "../stores/TimeLogStore";
import TimerButton from "./TimerButton";
import CountDown from "./CountDown";
import TimeList from "./TimeList";

const getLatestTimeRow = () => {
    const timeLogs = TimeLogStore();

    const latestTimeRow = timeLogs[0];

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
    const [timeRows, setTimeRows] = useState([]);
    const [action, setAction] = useState(null);
    const [at, setAt] = useState(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeRowStore = TimeLogStore();

        if (timeRowStore) {
            setTimeRows(timeRowStore);

            const latestTimeRow = getLatestTimeRow();

            if (latestTimeRow.startTime && !latestTimeRow.endTime) {
                const totalSeconds = moment().diff(moment(latestTimeRow.startTime), 'seconds');
                setAction('start');
                setStarted(true);
                setAt(totalSeconds);
            }
        }
    }, []);

    const addToTimes = (time) => {

        let initialTimeRows = timeRows;

        let latestItem = getFirstItem(timeRows);

        if (latestItem === undefined || latestItem.endTime) {
            let timeRow = {};
            console.log('Creating new row with ', time.format('YYYY-MM-DD HH:mm'));
            timeRow.id = Math.random() + Math.random();
            timeRow.day = time.format('D ddd');
            timeRow.startTime = time;
            timeRow.endTime = null;
            timeRow.total = 0;
            initialTimeRows = [timeRow, ...timeRows];
            setTimeRows(initialTimeRows);
        }

        if (latestItem && !latestItem.endTime) {
            console.log("Updating old row with end time", time.format("YYYY-MM-DD HH:mm"));
            latestItem.endTime = time;
            latestItem.total = time.diff(latestItem.startTime, "minutes");
            initialTimeRows[getFirstItemKey()] = latestItem;
            setTimeRows([...initialTimeRows]);
        }

        // localStorage.setItem("timeRows", JSON.stringify(initialTimeRows));

        // console.log(JSON.parse(localStorage.getItem("timeRows")));
    };

    const toggle = (action, time) => {
        console.log('We receive a toggle(action, time)', action, time);

        setAction(action);
        addToTimes(moment(time));

        if (action === "start") {
            setStarted(true);
            setAt(moment().diff(moment(time), 'seconds'));
        }

        if (action === "stop") {
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
