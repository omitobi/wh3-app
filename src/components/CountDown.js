import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const getInitialTimerState = () => {
    return {
        hour: 0,
        minute: 0,
        seconds: 0,
        interval: null,
    }
};

const getInitialTotalSecondState = () => {
    return 0;
};

const CountDown = ({action, at}) => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerInterval, setTimerInterval] = useState(0);
    const [totalSecond, setTotalSecond] = useState(getInitialTotalSecondState());

    useEffect(() => {
        const updateTimer = () => {
            let totalSeconds = updateNowTotalSecond();
            const hour = getHour(totalSeconds);
            const minute = getMinute(totalSeconds, hour);
            const seconds = getSeconds(totalSeconds, hour, minute);

            setHour(hour);
            setMinute(minute);
            setSeconds(seconds);
        };

        const resetAll = () => {
            setTimerInterval(null);
            setTotalSecond(0);
            setHour(0);
            setMinute(0);
            setSeconds(0);
        };

        const updateNowTotalSecond = () => {
            let totalSeconds = 0;
            setTotalSecond(sec => {
                totalSeconds = sec + 1;
                return totalSeconds;
            });

            return totalSeconds;
        };

        if (action === "start") {
            setTotalSecond(at ? at : 0);
            let interval_ = setInterval(updateTimer, 1000);
            setTimerInterval(interval_)
        }

        const stopTimer = () => {
            setTotalSecond(0);
            clearInterval(timerInterval);
            resetAll()
        };

        if (action === "stop") {
            stopTimer();
        }

        const getHour = (totalSeconds) => {
            return Math.floor(totalSeconds / 3600);
        };

        const getMinute = (totalSeconds, hour) => {
            return Math.floor((totalSeconds - hour * 3600) / 60);
        };

        const getSeconds = (totalSeconds, hour, minute) => {
            return totalSeconds - (hour * 3600 + minute * 60);
        };
    }, [action, at]);

    const getFullTimeString = () => {
        let timerString = hour + ":";

        if (minute < 10) {
            timerString += "0";
        }

        timerString += minute + ":"

        if (seconds < 10) {
            timerString += "0";
        }

        timerString += seconds;

        return timerString;
    };

    return (
        <TouchableOpacity style={styles.counterClock}>
            <Text style={styles.counterText}>{getFullTimeString()}</Text>
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

export default CountDown;
