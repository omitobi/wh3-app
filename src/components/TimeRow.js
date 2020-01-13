import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import moment from "moment";

const TimeRow = ({item}) => {
    const getTotalString = (totalMinutes) => {
        let elapsedHour = Math.floor(totalMinutes / 60);
        let elapsedMinutes = totalMinutes % 60;
        let totalString = elapsedHour + ":";

        if (elapsedMinutes < 10) {
            totalString += "0";
        }

        totalString += elapsedMinutes;

        return totalString;
    };

    const getStartTimeString = (startTime) => {
        return moment(startTime).format("HH:mm");
    };

    const getEndTimeString = (endTime) => {
        if (!endTime) {
            return "00:00";
        }

        return moment(endTime).format("HH:mm");
    };

    return (
        <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>{item.day}</Text>
                <Text style={styles.itemText}>{getStartTimeString(item.startTime)}</Text>
                <Text style={styles.itemText}>{getEndTimeString(item.endTime)}</Text>
                <Text style={styles.itemText}>{getTotalString(item.total)}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: 'space-between',
        marginHorizontal: 2,
        marginVertical: 6,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#faf9f7',
        minWidth: "100%",
    },
    itemText: {
        marginHorizontal: 3,
        alignSelf: "center",
        fontSize: 16,
        width: "27%", //todo.correct this to have even spaces from left and right
        textAlign: "left",
    }
});

export default TimeRow;
