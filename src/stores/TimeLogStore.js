const TimeLogStore = () => {
    const timeRowsStore = [{
        day: '6 Mon',
        startTime: '2020-01-06 11:10',
        endTime: '2020-01-06 11:10',
        total: 50
    }, {
        day: '6 Mon',
        startTime: '2020-01-06 00:10',
        endTime: '2020-01-06 00:50',
        total: 50
    }, {
        day: '6 Mon',
        startTime: '2020-01-06 11:10',
        endTime: '2020-01-06 11:10',
        total: 50
    }];
    return  timeRowsStore;
    // return JSON.parse(timeRowsStore);
};


export default TimeLogStore;
