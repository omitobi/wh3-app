import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TimeRow = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text>{item.day}</Text>
            <Text>{item.start}</Text>
            <Text>{item.end}</Text>
            <Text>{item.total}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginVertical: 4
    }
})

export default TimeRow;
