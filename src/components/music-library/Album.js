import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import ArtistItem from './ArtistItem';
import songs from './data';


class Album extends React.Component {

    render() {
        return (

            <FlatList data={songs}
                renderItem={({ item }) =>
                    <ArtistItem title={item.title}
                        imgUri={item.img} />} 
                        keyExtractor={item => item.id}>
                            
            </FlatList>

        );
    }
}

export default Album;