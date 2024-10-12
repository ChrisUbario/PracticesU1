import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Home Screen</Text>
		<Button
        	title="Start"
        	onPress={() => navigation.navigate('Start', {
				id: 1,
				message: 'Hi, I am learning react native :D',
			})}
      		/>
		</View>
	);
};

export default HomeScreen;