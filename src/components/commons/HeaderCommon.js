import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class HeaderCommon extends Component {

    constructor(props) {
        super(props);
    }

    goToHomePage = () => {
        Actions.HomePage()
    }

    render() {
        return (
            <View style={styles.headerCommon}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={this.goToHomePage} style={styles.headerLeft}>
                        <Icon name="angle-left" size={30} color="white" />
                        <Text style={styles.headerText}> {this.props.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <Icon name={this.props.icon} size={20} color="white" />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerCommon: {
        backgroundColor: "#33adff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10,
        alignSelf: "center"
    },
    headerLeft: {
        flexDirection: "row",
    },
    headerText: {
        color: "white",
        paddingLeft: 10,
        alignSelf: "center"
    }
})

export default HeaderCommon;