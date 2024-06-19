import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Search from '../../components/searchbar/searchBar';


const listPage = () => {
    return (
        <View>
            <Search/>
            <Text>
                Je profiel van wandel plekken die je leuk vindt !
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
export default listPage