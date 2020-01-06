import React from 'react';
import { View, Text, Button} from 'react-native';

const Statistics = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Statistics Screen</Text>
        </View>
    )
};

export default Statistics;

Statistics.navigationOptions = screenProps => ({
    title: "Statistics"
});
