import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import greenPlaceData from '../../greenPlaceData.json';
import * as Location from 'expo-location';
import Search from '../../components/searchbar/searchBar';

const MapPage = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const userPlace = useRef(null);


    // async function to get permission to use the location, the function is done as the documentations of expo-location
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestBackgroundPermissionsAsync(); // used requestBackgroundPermissionsAsync instead of getCurrentPositionAsync this one was outdated
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const userLocation = () => {   // function to zoom in the user location
        console.log("userLocation function called");
        if (location) {
            console.log("Location data: ", location); // Log the location data
            userPlace.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,    // error with fetching the location data
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }, 1000);
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchbar}><Search/></View>
            <MapView
                ref={userPlace}
                style={styles.map}
                region={{
                    latitude: 51.9225,
                    longitude: 4.47917,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                {greenPlaceData.green_places.map((place, index) => (
                    <Marker
                        key={index}
                        coordinate={{latitude: place.latitude, longitude: place.longitude}}
                        title={place.title}
                        description={place.description}
                    >
                        <Image source={require('../../assets/pin.png')} style={styles.pin}

                        />
                    </Marker>
                ))}
                <Text style={styles.location}>location: {text} </Text>

            </MapView>
            <TouchableOpacity onPress={() => userLocation()}>
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
    location: {
        position: 'absolute',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'green',
        bottom: 100,
        padding: 10,
    },

    locationPin: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        zIndex: 1,
    }
}

export default MapPage