import React from 'react';
import {Text, View, Image} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import greenPlaceData from '../../greenPlaceData.json';

const MapPage = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     region={{
                         latitude: 51.9225,
                         longitude: 4.47917,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}>
                {greenPlaceData.green_places.map((place, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        title={place.title}
                        description={place.description}
                    >
                        <Image source={require('../../assets/pin.png')} style={styles.pin} />
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    pin: {
        width: 30,
        height: 40,
    },
}

export default MapPage