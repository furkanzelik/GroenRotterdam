import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Pressable, Image, StatusBar, Button} from 'react-native';
import Search from '../../components/searchbar/searchBar';


const ListPage = ({navigation}) => {
    const [greenPlaceData, setGreenPlaceData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/furkanzelik/GroenRotterdam/master/greenPlaceData.json");
                const json = await response.json();
                setGreenPlaceData(json.green_places); // Zorg ervoor dat je het juiste pad naar de gegevens gebruikt
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []); // dependenct leeg schrijven zodat het maar 1 keer wordt uitgevoerd




    return (
        <View style={styles.container}>
            <Search/>
            <FlatList
                style={styles.flatList}
                data={greenPlaceData}
                horizontal={false}
                numColumns={2}
                // columnWrapperStyle={styles.row}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, image}) => (
                    <View style={styles.items}>
                        <Pressable onPress={() => console.log(item.title)}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Image style={styles.itemImage} source={{uri: item.image}}/>
                            <View style={styles.buttonDirection}>
                                <Button title={"Meer info"} onPress={() => navigation.navigate('infoPlace')}/>
                                <Button title={"Like"} onPress={() => console.log(`like: ${item.title}`)}/>
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    flatList: {
        marginTop: "15%"
    },

    items: {
        padding: 20,
        width: 150,
        height: 200,
        marginVertical: 5,
        marginHorizontal: 5,
        alignSelf: 'center',
        flex: 2,
        borderTopWidth: 1,
        borderTopRadius: 25,
    },

    itemTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5,
    },

    itemImage: {
        width: 150,
        height: 135,
        borderRadius: 3,
        alignSelf: 'center',
    },
    buttonDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
});

export default ListPage;
