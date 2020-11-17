import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import ArtistItem from './ArtistItem';
import songs from './data';


class Artist extends React.Component {

    render() {
        return (

            <FlatList data={songs}
                renderItem={({ item }) => <ArtistItem title={item.singer}
                    imgUri={item.img} />}
                    keyExtractor={item => item.id}>
            </FlatList>

        )
    }
}

export default Artist;