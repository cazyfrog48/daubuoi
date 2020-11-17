import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class HeaderMusicLibrary extends React.Component {

    goToHomePage = () => {
        Actions.HomePage()
    }

    render() {
        return (
            <View style={styles.headerMusicLibrary}>
                <View style={styles.hMLeft}>
                    <TouchableOpacity onPress={this.goToHomePage} style={styles.hMLeft}>
                        <Icon name="angle-left" size={30} color="white" />
                        <Text style={styles.hmText}> Thư viện nhạc</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hMRight}>
                    <Icon name="search" size={20} color="white" />
                    <Icon name="search-plus" size={20} color="white" />
                    <Icon name="bars" size={20} color="white" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerMusicLibrary: {
        backgroundColor: "#33adff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    hMRight: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        paddingRight: 5,
        alignSelf: "center"
    },
    hMLeft: {
        flexDirection: "row",
        flex: 3
    },
    hmText: {
        color: "white",
        paddingLeft: 10,
        alignSelf: "center"
    }
})

export default HeaderMusicLibrary;