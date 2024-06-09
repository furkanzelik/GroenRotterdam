import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const searchBar = () => {

    const [text, onChangeText] = React.useState("Zoek je plekkie op !");

    return (
        <View style={styles.container}>
           <TextInput
           style={styles.input}
           onChangeText={onChangeText}
              value={text}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: "12%",
        width: '70%',
        alignSelf: 'center',

    },

    input: {
        height: 40,
        borderColor: 'green',
        margin: 12,
        borderWidth: 3,
        padding: 10,
        borderRadius: 11,
        textAlign: "left",
        color: "grey",
        backgroundColor: "white",
    },
});
export default searchBar;