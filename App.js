//Practices description
//1. Use NavigationContainer and StackNavigator to define screens to navigate
//2. Make components with content to import them to the App.js and add them to StackNavigation as screens
//3. Add buttons to the components and navigate between each one using the buttons
//4. Add parameters to send between components, additionally change the navbar color of the components 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import StartScreen from './src/screens/StartScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: { backgroundColor: 'blue'},
                    headerTintColor: '#fff',
                }}/>
                <Stack.Screen 
                name="Start" 
                component={StartScreen}
                options={{
                    title: 'Start',
                    headerStyle: { backgroundColor: 'yellow'},
                    headerTintColor: '#fff',
                }}/>
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen}
                options={{
                    title: 'Details',
                    headerStyle: { backgroundColor: 'green'},
                    headerTintColor: '#fff',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;