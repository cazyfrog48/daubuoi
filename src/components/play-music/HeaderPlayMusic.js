import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class HeaderPlayMusic extends Component {

    constructor(props) {
        super(props);
    }

    goToHomePage = () => {
        Actions.HomePage()
    }

    render() {
        return (
            <View style={styles.headerPlayMusic}>
                <View style={styles.headerPlayMusicLeft}>
                    <TouchableOpacity onPress={this.goToHomePage}>
                        <Icon name="angle-left" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerPlayMusicCenter}>
                    <Text style={styles.textPlayMusic}>{this.props.nameSong}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="mobile" size={10} color="white" />
                        <Text style={styles.textPlayMusicSmall}>{this.props.nameArtist}</Text>
                    </View>
                </View>
                <View style={styles.headerPlayMusicRight}>
                    <Icon name="ellipsis-v" color="white" size={20} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerPlayMusic: {
        flexDirection: "row",
        backgroundColor: "#3d3d5c",
        padding: 5
    },
    headerPlayMusicLeft: {
        flex: 1,
        paddingLeft: 5
    },
    headerPlayMusicCenter: {
        flex: 10,
        color: "white"
    },
    headerPlayMusicRight: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center"
    },
    textPlayMusic: {
        color: "white"
    },
    textPlayMusicSmall: {
        color: "white",
        fontSize: 10,
        paddingLeft: 5
    }
})

export default HeaderPlayMusic;