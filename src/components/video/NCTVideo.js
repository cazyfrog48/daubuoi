import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderCommon from '../commons/HeaderCommon';
import NoInternet from '../error/NoInternet';

class NCTVideo extends Component {

    render() {
        return(
            <View>
                <HeaderCommon title="Nhạc của tui Video"/>
                <NoInternet/>
            </View>
        );
    }
}

export default NCTVideo;