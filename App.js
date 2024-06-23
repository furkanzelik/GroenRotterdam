// navigators, the first page that is shown when the app is opened is the startPage.
// if clicked on the map icon, the mapPage is shown.
// if clicked on the profile icon, the profilePage is shown.

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import startPage from './components/pages/startPage';
import listPage from './components/pages/listPage';
import React, {useEffect, useState} from "react";
import MapStack from "./components/mapNavigator/mapNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfilePage from "./components/pages/profilePage";
import {ThemeContext, darkMode} from "./components/context/ThemeContext";


const Tab = createBottomTabNavigator();




// navigation container zoals de documentatie van react-navigation aangeeft
    export default function App() {

        const [isDarkTheme, setIsDarkTheme] = useState(false);

        useEffect(() => {
            const loadTheme = async () => {
                const theme = await AsyncStorage.getItem('theme');
                setIsDarkTheme(theme === 'dark');
            }
            loadTheme();
        }, []);

        const toggleDarkmode = async () => {
            const newTheme = !isDarkTheme ? 'light' : 'dark';
            setIsDarkTheme(!isDarkTheme);
            await AsyncStorage.setItem('theme', newTheme);
        }

        return (
            <ThemeContext.Provider value={{ isDarkTheme, toggleDarkmode }}>
                <NavigationContainer theme={isDarkTheme ? darkMode : DefaultTheme}>
                    <Tab.Navigator
                        initialRouteName="Start"
                        screenOptions={{
                            tabBarActiveTintColor: 'darkgreen',
                            tabBarInactiveTintColor: 'darkgreen',
                        }}>
                        <Tab.Screen
                            name="Start"
                            component={startPage}
                            options={{
                                headerShown: false,
                                tabBarLabel: "Home",
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={isDarkTheme ? '#000' : 'darkgreen'} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Map"
                            component={MapStack}
                            options={{
                                headerShown: false,
                                tabBarLabel: "Map",
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="map" color={isDarkTheme ? '#000' : 'darkgreen'} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="List of green Places"
                            component={listPage}
                            options={{
                                tabBarLabel: "Lijst",
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="plus-circle" color={isDarkTheme ? '#000' : 'darkgreen'} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            options={{
                                tabBarLabel: "Profile",
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={isDarkTheme ? '#000' : 'darkgreen'} size={size} />
                                ),
                            }}>
                            {(props) => <ProfilePage {...props} />}
                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeContext.Provider>
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