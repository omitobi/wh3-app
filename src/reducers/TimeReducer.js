import TimeLogStore from "../stores/TimeLogStore";

const getLatestTimeRow = (timeLogs) => {

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

const addToTimes = (timeRows, time) => {
    let timeRow = {};
    console.log('Creating new row with ', time.format('YYYY-MM-DD HH:mm'));
    timeRow.id = Math.random() + Math.random();
    timeRow.day = time.format('D ddd');
    timeRow.startTime = time;
    timeRow.endTime = null;
    timeRow.total = 0;
    return [timeRow, ...timeRows];
};

const stopTime = (timeRows, time) => {
    let initialTimeRows = timeRows;

    let latestItem = getFirstItem(timeRows);
    console.log("Updating old row with end time", time.format("YYYY-MM-DD HH:mm"));
    latestItem.endTime = time;
    latestItem.total = time.diff(latestItem.startTime, "minutes");
    initialTimeRows[getFirstItemKey()] = latestItem;
    return [...initialTimeRows];
};


export const TimeReducer = (state, action) => {
    switch (action.type) {
        case 'START_TIME':
            return addToTimes(state, action.time);
        case 'STOP_TIME':
            return stopTime(state, action.time);
        default:
            return state;
    }
};
