import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

function TimeContextProvider(props) {
    const [fullTimeString, setFullTimeString] = useState(null);

    const updateFullTimeString = (hour, minute, seconds) => {
        let timerString = hour + ":";

        if (minute < 10) {
            timerString += "0";
        }

        timerString += minute + ":";

        if (seconds < 10) {
            timerString += "0";
        }

        timerString += seconds;

        setFullTimeString(timerString);
    };

    return (
        <TimeContext.Provider value={{fullTimeString, updateFullTimeString}}>
            {props.children}
        </TimeContext.Provider>
    );
}

export default TimeContextProvider;
