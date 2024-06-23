import React from "react";
import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

function InfoPlace({ route, navigation }) {
    const { placeTitle, placeLongDescription, placeImage } = route.params;
    const { isDarkTheme } = React.useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
            <Image style={styles.image} source={{ uri: placeImage }} />
            <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#333' }]}>{placeTitle}</Text>
            <Text style={[styles.description, { color: isDarkTheme ? '#fff' : '#333' }]}>{placeLongDescription}</Text>
            <Pressable onPress={() => navigation.goBack()} style={{ padding: 10, backgroundColor: isDarkTheme ? '#444' : '#fff', borderRadius: 10, alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ color: isDarkTheme ? '#fff' : '#333' }}>Terug naar de map</Text>
            </Pressable>
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
