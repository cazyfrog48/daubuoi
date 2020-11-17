import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PlayingMusic extends React.Component {

    render() {
        return (
            <View style={styles.playingMusic}>
                <View style={styles.playingMusicImage}>
                    <Image resizeMode='cover'
                        style={styles.thumbnail}
                        source={require('../assets/image/photo.jpg')}
                    />
                </View>
                <View style={{flex: 6, padding: 7}}>
                    <Text style={{fontSize: 12}}>Mười năm</Text>
                    <Text style={{color: "#9494b8", fontSize: 10}}>Vanh Vâu</Text>
                </View>
                <View style={styles.playingMusicRight}>
                    <Icon name="play" color="#33adff" size={16}/>
                    <Icon name="step-forward" color="#33adff" size={16}/>
                    <Icon style={{paddingRight: 15}} name="bars" color="#33adff" size={16}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playingMusic: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopColor: "#EEE",
        borderTopWidth: 0.4
    },
    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    playingMusicImage: {
        flex: 1.4,
        width: 200,
        height: 45,
    },
    playingMusicRight: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default PlayingMusic;