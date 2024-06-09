import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import background from '../../assets/bos.jpg'


const StartPage = ({navigation}) => {
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Map') }
                >
                    <Text style={styles.buttonText}>Laten we Beginnen !</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
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
        marginTop: '12%',
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },

    textContainer: {
        backgroundColor: '#000000c0',
        borderColor: 'darkgreen',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: '62%',
        width: '80%',
        alignSelf: 'center',
        padding: 5,
    },

    text: {
        color: 'white',
        fontSize: 23,
        lineHeight: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'darkgreen',
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
});
export default StartPage;