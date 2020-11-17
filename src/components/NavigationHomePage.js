import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './HomePage';
import MusicLibrary from './music-library/MusicLibrary';
import NCTPlayList from './playlist/NCTPlayList';
import Video from './video/NCTVideo';
import Search from './Search';
import PlayMusic from './play-music/PlayMusic';



function NavigationHomePage({ navigation }) {
    return (
        <Router>
            <Scene key="root">
                <Scene key="HomePage" component={HomePage} hideNavBar={true} initial={true}/>
                <Scene key="PlayList" component={NCTPlayList} hideNavBar={true} />
                <Scene key="Video" component={Video} hideNavBar={true} />
                <Scene key="MusicLibrary" component={MusicLibrary} hideNavBar={true} />
                <Scene key="Search" component={Search} hideNavBar={true} />
                <Scene key="PlayMusic" component={PlayMusic} hideNavBar={true} />
            </Scene>
        </Router>
    );
}

export default NavigationHomePage;
