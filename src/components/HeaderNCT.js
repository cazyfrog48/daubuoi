import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import ItemInfo from './ItemInfo';
import { ThemeProvider } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';

class HeaderNCT extends React.Component {

    constructor(props, navagation) {
        super(props, navagation);
    }

    goToSearch = () => {
        Actions.Search();
    }

    render() {
        const { navigation } = this.props;
        return (
        <>
            <View style={styles.headerNCT}>
               
                    <Icon name="bars" color="white" size={18} />
            
                <Text style={styles.headerText}>Của tui</Text>     
                <TouchableOpacity onPress={this.goToSearch}>
                    <Icon name="search" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </>
    );
    }
}

const styles = StyleSheet.create({
    headerNCT: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#33adff"
    },
    headerText: {
        color: "white"
    }
})

export default HeaderNCT;