import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TimeRow = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.day}</Text>
            <Text style={styles.itemText}>{item.start}</Text>
            <Text style={styles.itemText}>{item.end}</Text>
            <Text style={styles.itemText}>{item.total}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#faf9f7',
    },
    itemText: {
        fontSize: 16,
    }
});

export default TimeRow;
