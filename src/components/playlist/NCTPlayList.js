import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import PlayList from '../music-library/Playlist';
import PlayListItem from './PlayListItem';
import { Actions } from 'react-native-router-flux';
import HeaderCommon from '../commons/HeaderCommon';

const DATA = [
    {
        title: 'First Item',
        source: require('../../assets/image/NCT.jpg')
    },
    {
        title: 'Second Item',
        source: require('../../assets/image/artist.png')
    },
    {
        title: 'Third Item',
        source: require('../../assets/image/NCT.jpg')
    },
    {
        title: 'First Item',
        source: require('../../assets/image/artist.png')
    }
];



class NCTPlayList extends React.Component {

    render() {
        return (
            <View>
                <HeaderCommon title="Nhạc của tui playlist" icon="retweet" />

                <View>
                    <PlayList numberPlayList="4" />
                </View>

                <View>

                    <FlatList data={DATA}
                        renderItem={({ item }) => <PlayListItem title={item.title}
                            imgUri={item.source} />}
                            keyExtractor={item => item.id}>
                    </FlatList>

                </View>
            </View>
        )
    }
}

export default NCTPlayList;