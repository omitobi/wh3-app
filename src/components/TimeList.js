import React from 'react';
import {SafeAreaView, SectionList, Text, View, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import TimeRow from "./TimeRow";


const TimeList = ({data}) => {
    return (
        <SafeAreaView style={styles.records}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => {
                    return (
                        <TimeRow item={item}/>
                    )
                }}
                renderSectionHeader={({section: {title}}) => (
                    <View
                        style={styles.header}>
                        <Text style={styles.headerText}>Day</Text>
                        <Text style={styles.headerText}>Start</Text>
                        <Text style={styles.headerText}>Stop</Text>
                        <Text style={styles.headerText}>Total</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    records: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        // marginHorizontal: 10,
        // marginTop: 50,
        marginTop: Constants.statusBarHeight,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        minWidth: "100%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        backgroundColor: "#F0F0F0",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 3,
        paddingTop: 10,
        paddingBottom: 10,
        width: 105,
        textAlign: "left",
    },
    title: {
        fontSize: 16,
    },
});

export default TimeList;
