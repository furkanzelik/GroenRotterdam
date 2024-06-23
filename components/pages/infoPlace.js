import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import {ThemeContext} from "../context/ThemeContext";

function InfoPlace({ route }) {
    const { placeTitle, placeLongDescription, placeImage } = route.params; // alle parameters die vanaf de mappage callouts worden meegegeven
    const {isDarkTheme, toggleDarkmode} = React.useContext(ThemeContext);

    return (
        <View style={[styles.container, {backgroundColor: isDarkTheme ? '#333' : '#fff'}]}>
            <Image style={styles.image} source={{ uri: placeImage }} />
            <Text style={[styles.title, {color: isDarkTheme ? '#fff' : '#333'}]}>{placeTitle}</Text>
            <Text style={[styles.description, {color: isDarkTheme ? '#fff' : '#333'}]}>{placeLongDescription}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        marginTop: '15%',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '40%',
        resizeMode: 'cover',
        marginBottom: 20,
    },
});

export default InfoPlace;
