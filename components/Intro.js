import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    SectionList,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        title: 'Monday - 2019-12-30',
        data: [{
            day: 'Mon',
            start: '11:10',
            end: '11:50',
            total: '00:40'
        }],
    }
];

const Intro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <TouchableOpacity style={styles.counterClock}>
                    <Text style={styles.counterText}>0:00:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.counterButton} onPress={() => navigation.navigate('History')}>
                    <Text style={styles.counterButtonText}>
                        Go to Details
                    </Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.records}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.item}>
                                <Text>{item.day}</Text>
                                <Text>{item.start}</Text>
                                <Text>{item.end}</Text>
                                <Text>{item.total}</Text>
                            </TouchableOpacity>
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
        </View>
    );
};
export default Intro;

Intro.navigationOptions = screenProps => ({
    title: "Home"
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    counter: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red"
    },
    counterClock: {
        flex: 3,
        minWidth: 300,
        minHeight: 300,
        borderRadius: 255,
        backgroundColor: "#7263",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: "grey",
        borderWidth: 6,
        marginTop: 15,
        marginBottom: 15,
    },
    counterText: {
        alignSelf: "center",
        fontSize: 75,
    },
    counterButton: {
        flex: 1,
        backgroundColor: "#34baeb",
        alignContent: "center",
        justifyContent: "center",
        minHeight: 40,
        borderRadius: 10,
        marginBottom: 20
    },
    counterButtonText: {
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    records: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginTop: 50
        // marginTop: Constants.statusBarHeight,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginVertical: 4
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        minWidth: "100%",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
    },
    title: {
        fontSize: 16,
    },
});
