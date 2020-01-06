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
            <View style={styles.itemTextWrap}>
                <Text style={styles.itemText}>{item.day}</Text>
            </View>
            <View style={styles.itemTextWrap}>
                <Text style={styles.itemText}>{getStartTimeString(item.startTime)}</Text>
            </View>
            <View style={styles.itemTextWrap}>
                <Text style={styles.itemText}>{getEndTimeString(item.endTime)}</Text>
            </View>
            <View style={styles.itemTextWrap}>
                <Text style={styles.itemText}>{getTotalString(item.total)}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 2,
        marginVertical: 10,
        padding: 8,
        backgroundColor: '#faf9f7',
    },
    itemText: {
        fontSize: 16,
    },
    itemTextWrap: {
        minWidth: 40,
        alignContent: "flex-start"
    }
});

export default TimeRow;
