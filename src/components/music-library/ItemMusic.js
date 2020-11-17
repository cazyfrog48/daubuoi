import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ItemMusic extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.itemMusic}>
                <View style={styles.itemMusicImage}>
                    <Image style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover'
                    }}
                    resizeMode='cover'
                    source={require('../../assets/image/NCT.jpg')} />
                </View>
                <View style={styles.itemMusicTitle}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.itemMusicIcon}>
                    <Text>...</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemMusic: {
        flexDirection: "row",
        paddingTop: 5,
        paddingLeft: 10,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#9494b8"
    },
    itemMusicImage: {
        flex: 1.4,
        width: 200,
        height: 45,
    },
    itemMusicTitle: {
        flex: 8,
        padding: 12
    },
    itemMusicIcon: {
        flex: .8
    }
})

export default ItemMusic;