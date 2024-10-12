import React from 'react';
import { View, Text, Button } from 'react-native';

const StartScreen = ({ route, navigation }) =>{
    const { id, message } = route.params;
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Start Screen</Text>
            <Text>Id: {JSON.stringify(id)}</Text>
            <Text>Message: {JSON.stringify(message)}</Text>
        <Button
        title="Details"
        onPress={() => navigation.navigate('Details', {
            id: Math.floor(Math.random() * 100),
        })}
          />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
};

export default StartScreen;