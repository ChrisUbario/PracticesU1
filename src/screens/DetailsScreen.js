import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
    const { id, message } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>Id: {JSON.stringify(id)}</Text>
            <Button
        	title="Home"
        	onPress={() => navigation.navigate('Home')}
      		/>
		<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
    );
}

export default DetailsScreen;