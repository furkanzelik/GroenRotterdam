import React from 'react';
import {FlatList, SafeAreaView, SectionList, Text, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
import background from '../../assets/forrest-bg.png'


const StartPage = () => {
    return (
      <View style={styles.container}>
    <ImageBackground  style={styles.bg} source={background}>
        <Text style={styles.header}>Groen Rotterdam</Text>
        <Text style={styles.text}>Met Groen Rotterdam kan je makkelijk de perfecte groene plekken vinden
        om te gaan wandelen.</Text>
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

    text: {
        color: 'white',
        fontSize: 24,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 450,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        borderColor: 'darkgreen',
        width: '80%',
        backgroundColor: 'darkgreen',
        alignSelf: 'center',
    },


}
export default StartPage;