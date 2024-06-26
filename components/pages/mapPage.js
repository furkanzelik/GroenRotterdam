import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import Search from '../../components/searchbar/searchBar';
import greenPlaceData from '../../greenPlaceData.json';
import {ThemeContext} from "../context/ThemeContext";

const MapPage = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const userPlace = useRef(null);
    const {isDarkTheme, toggleDarkmode} = React.useContext(ThemeContext);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();  // vraagt toestemming aan de gebruiker om de locatie te gebruiken
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({}); // haalt de locatie van de gebruiker op
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const userLocation = () => {
        // stuurt naar de locatie van de gebruiker
        if (location) {
            userPlace.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }, 1000);
        }
    }


    return (
        // Kaart van Rotterdam

        <SafeAreaView style={[styles.container, {backgroundColor: isDarkTheme ? '#333' : '#fff'}]}>
            <View style={styles.searchbar}><Search/></View>
            <MapView
                ref={userPlace}
                style={styles.map}
                initialRegion={{
                    latitude: 51.9225,
                    longitude: 4.47917,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                {/*// stuurt naar de locatie van de gebruiker als je er op klikt*/}
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                        title="Your Location"
                        description="This is where you are"
                    />
                )}

                {greenPlaceData.green_places.map((place, index) => (
                    <Marker
                        //markers voor de groene plekken
                        key={index}
                        coordinate={{latitude: place.latitude, longitude: place.longitude}}
                        title={place.title}
                        description={place.description}>
                        <Image source={require('../../assets/pin.png')} style={styles.pin}/>
                        <Callout>
                            <View style={styles.calloutView}>
                                <Text style={styles.calloutTitle}>{place.title}</Text>
                                <Text style={styles.calloutDescription}>{place.description}</Text>
                                <View style={styles.calloutFlex}>
                                    <Image source={{uri: place.image}} style={styles.calloutImage}/>
                                    <Button title="Meer info" onPress={() => navigation.navigate('infoPlace', {
                                        placeTitle: place.title,
                                        placeImage: place.image,
                                        placeLongDescription: place.longDescription,
                                    })}/>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            {/*stuurt naar de locatie van de gebruiker */}
            <TouchableOpacity onPress={userLocation}>
                <Image source={require('../../assets/locations.png')} style={styles.locationPin}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    searchbar: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    pin: {
        width: 30,
        height: 40,
    },
    locationPin: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        zIndex: 1,
    },
    calloutView: {
        width: 300,
        height: 250,
        padding: 2,
        alignItems: 'center',
    },
    calloutTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    calloutDescription: {
        marginVertical: 5,
        textAlign: 'center',
    },
    calloutImage: {
        flex: 1,
        width: 250,
        height: 150,
        resizeMode: 'cover',

    },
    calloutFlex: {
        flex: 1,
    },
};

export default MapPage;
