// navigators, the first page that is shown when the app is opened is the startPage.
// if clicked on the map icon, the mapPage is shown.
// if clicked on the profile icon, the profilePage is shown.

import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import startPage from './components/pages/startPage';
import mapPage from './components/pages/mapPage';
import profilePage from './components/pages/profilePage';
import listPage from './components/pages/listPage';
import React from "react";
import MapStack from "./components/mapNavigator/mapNavigation";


const Tab = createBottomTabNavigator();


// navigation container did as the documentation said.
export default function App() {
    return (
        <NavigationContainer
            initialRouteName="Start"
            screenOptions={{
                tabBarActiveTintColor: 'darkgreen',
                tabBarInactiveTintColor: 'darkgreen',
            }}>
            <Tab.Navigator >
                <Tab.Screen
                    name="Start"
                    component={startPage}
                    options={{
                        headerShown: false,
                        tabBarLabel:"Home",
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Map"
                    component={MapStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: "MapPage",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map" color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen
                    name="List of green Places"
                    component={listPage}
                    options={{
                        tabBarLabel: "List",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={profilePage}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});