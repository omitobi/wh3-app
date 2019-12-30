import React from 'react';
import { View, Text, Button} from 'react-native';
import Intro from "./Intro";

const History = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
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
    )
};

export default History;

History.navigationOptions = screenProps => ({
    title: "History"
});
