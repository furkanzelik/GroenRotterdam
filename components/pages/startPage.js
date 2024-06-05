import React from 'react';
import {FlatList, SafeAreaView, SectionList, Text, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
import background from '../../assets/forrest-bg.png'


const StartPage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bg} source={background}>
                <Text style={styles.header}>Groen Rotterdam</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Met Groen Rotterdam kan je makkelijk de perfecte groene plekken vinden
                        om te gaan wandelen.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    bg: {
        width: '100%',
        height: '100%',
    },

    header: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },

    textContainer: {
        backgroundColor: 'darkgreen',
        borderColor: 'darkgreen',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: '110%',
        width: '80%',
        alignSelf: 'center',
        padding: 10,
    },

    text: {
        color: 'white',
        fontSize: 24,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
};
export default StartPage;