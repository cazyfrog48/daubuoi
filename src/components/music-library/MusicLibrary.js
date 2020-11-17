import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderMusicLibrary from './HeaderMusicLibrary';
import MenuItemMusic from './MenuItemMusic';
import NavigationMusicLibray from './NavigationMuiscLibrary';
import { Actions } from 'react-native-router-flux';
import NavigationMusicLibrary from './NavigationMuiscLibrary';

function MusicLibrary() {

    return (
        <>
            <HeaderMusicLibrary />
            <NavigationMusicLibrary/>
        </>
    )
}

export default MusicLibrary;