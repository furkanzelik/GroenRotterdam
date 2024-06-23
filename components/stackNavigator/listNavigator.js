import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from '../pages/listPage';
import infoPlace from '../pages/infoPlace';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListPage">
                <Stack.Screen name="ListPage" component={ListPage} />
                <Stack.Screen
                    name="infoPlace"
                    component={infoPlace}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;