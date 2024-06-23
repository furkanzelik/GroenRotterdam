import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Pressable, Image, StatusBar, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../../components/searchbar/searchBar';
import {ThemeContext} from '../context/ThemeContext';

const ListPage = ({navigation}) => {

    // usestates globaal aangemaakt om de code netter te houden

    const [greenPlaceData, setGreenPlaceData] = useState([]);
    const [favorites, setFavorites] = useState({});
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const {isDarkTheme, toggleDarkmode} = useContext(ThemeContext);

    useEffect(() => {  // useEffect om ook andere functies uit te voeren (favorieten)
        // fetch data van de groene plaatsen via github "een online server"
        const fetchData = async () => {  // async functie om data op te halen
            try { // probeer de data op te halen
                const response = await fetch("https://raw.githubusercontent.com/furkanzelik/GroenRotterdam/master/greenPlaceData.json");
                //gegevens worden opgehaald van de server de await zorgt ervoor dat de code wacht tot de gegevens zijn opgehaald
                const json = await response.json(); // de gegevens worden omgezet naar json
                setGreenPlaceData(json.green_places); // de gegevens worden in de state gezet
            } catch (error) {
                console.error('Error fetching data:', error); // error handeling
            }
        };

        const loadFavorites = async () => {
            // laad de favorieten van de gebruiker
            try {
                const storedFavorites = await AsyncStorage.getItem('favorites');
                if (storedFavorites !== null) {
                    setFavorites(JSON.parse(storedFavorites));
                }
            } catch (error) {
                console.error('Error loading favorites:', error);
            }
        };

        fetchData();
        loadFavorites();
    }, []);

    const toggleFavorite = async (item) => { // functie om favorieten toe te voegen of te verwijderen
        const newFavorites = {
            ...favorites, // kopie van de favorieten
            [item.title]: !favorites[item.title]
        };
        setFavorites(newFavorites);
        try {
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    };

    const isFavorite = (item,place) => favorites[item.title];

    const filteredData = showFavoritesOnly ? greenPlaceData.filter(isFavorite) : greenPlaceData; // filter de data op favorieten

    return (
        <View style={[styles.container, {backgroundColor: isDarkTheme ? '#333' : '#fff'}]}>
            {/*<Search />*/}
            <Button
                // de favoriten filter button
                title={showFavoritesOnly ? 'Toon alle plaatsen' : 'Toon alleen favorieten'}
                onPress={() => setShowFavoritesOnly(!showFavoritesOnly)}
            />
            <FlatList
                style={styles.flatList}
                data={filteredData}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={[styles.items, {backgroundColor: isDarkTheme ? '#444' : '#fff'}]}>
                        <Pressable onPress={() => console.log(item.title)}>
                            <Text style={[styles.itemTitle, {color: isDarkTheme ? '#fff' : '#000'}]}>{item.title}</Text>
                            <Image style={styles.itemImage} source={{uri: item.image}}/>
                            <View style={styles.buttonDirection}>
                                <Button
                                    title="Meer info"
                                    onPress={() => navigation.navigate('infoPlace', {
                                        placeTitle: item.title,
                                        placeImage: item.image,
                                        placeLongDescription: item.longDescription,
                                    })}
                                />
                                <TouchableOpacity onPress={() => toggleFavorite(item)}>
                                    <Icon style={styles.heart} name="heart" size={24}
                                          color={isFavorite(item) ? 'red' : 'grey'}/>
                                </TouchableOpacity>
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
        marginTop: "15%",
    },
    items: {
        padding: 20,
        width: 150,
        height: 220,
        marginVertical: 5,
        marginHorizontal: 5,
        alignSelf: 'center',
        flex: 2,
        borderTopWidth: 1,
        borderRadius: 25,
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
    heart: {
        marginVertical: 4,
        marginHorizontal: 2,
    },

});

export default ListPage;
