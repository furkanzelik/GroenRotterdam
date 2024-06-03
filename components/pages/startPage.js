import React from 'react';
import {FlatList, SafeAreaView, SectionList, Text, TouchableOpacity, View} from 'react-native';

const DATA = [
    {
        id: 1,
        name: 'Bossen'
    },
    {
        id: 2,
        name: 'Tuintjes'
    },
    {
        id: 3,
        name: 'Parken'
    },
    {
        id: 4,
        name: 'Natuur gebieden'
    },
]

const StartPage = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Waar ben je op zoek ?</Text>
          <FlatList
              style={styles.list}
              data={DATA}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <View style={styles.itemContainer}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        </TouchableOpacity> )}
                        // keyExtractor={(item) => item.id.toString()}
          >
          </FlatList>
      </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },

    header:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 16,
    },

    itemContainer:{
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#0a5402',
        borderWidth: 1,
        borderColor: '#0a5402',
        alignItems: 'center',
    },

    item:{
        fontSize: 24,
        color: '#ffffff',
    },

    list:{
        marginTop: 48,
    },


}
export default StartPage;