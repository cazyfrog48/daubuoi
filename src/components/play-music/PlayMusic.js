import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderPlayMusic from './HeaderPlayMusic';
import ContentPlayMusic from './ContentPlayMusic';
import FooterPlayMusic from './FooterPlayMusic';

class PlayMusic extends Component{

    render() {
        return(
            <View style={styles.playMusic}>
                <HeaderPlayMusic nameSong="Mười năm" nameArtist="Vanh Vâu" style={{flex: 1}}/>
                <ContentPlayMusic style={{flex: 3}}/>
                <FooterPlayMusic style={{flex: 2}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playMusic: {
        backgroundColor: "#3d3d5c",
        flex: 1,
        flexDirection: "column"
    }
})

export default PlayMusic;