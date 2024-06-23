import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapPage from '../pages/mapPage';
import infoPlace from "../pages/infoPlace";

const Stack = createStackNavigator();

function MapStack() {
    return (
        <Stack.Navigator initialRouteName="Map">
            <Stack.Screen
                name="map"
                component={MapPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="infoPlace"
                component={infoPlace}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    );
}

export default MapStack;
