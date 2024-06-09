import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Search from '../../components/searchbar/searchBar';


const ProfilePage = () => {
    return (
        <View>
            <Search/>
        <View style={styles.container}>
            <Text style={styles.box}>Je profiel van wandel plekken die je leuk vindt !</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    box: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default ProfilePage