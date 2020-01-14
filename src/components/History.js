import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet,} from 'react-native';
import Intro from "./Intro";
import Constants from "expo-constants";
import TimeHead from "./TimeHead";


const History = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TimeHead />
            <View style={styles.body}>
                <Text>History Screen</Text>
                <Button
                    title="Go to History... again"
                    onPress={() => navigation.push('History')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Intro')}
                />
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    )
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    body: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

});

History.navigationOptions = screenProps => ({
    title: "History"
});
