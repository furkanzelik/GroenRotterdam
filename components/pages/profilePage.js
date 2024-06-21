import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import profileDefault from '../../assets/userDefault.png';

const ProfilePage = () => {
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={profileDefault}
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Plaatsen die je leuk vindt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Dark/Light mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Plaatsen een plekkie erbij</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#008000',
        height: 250,
        borderBottomLeftRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#d3d3d3',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
});

export default ProfilePage;
