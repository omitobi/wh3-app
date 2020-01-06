import React from 'react';
import { View, Text, Button} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    )
};

export default Profile;

Profile.navigationOptions = screenProps => ({
    title: "Profile"
});
