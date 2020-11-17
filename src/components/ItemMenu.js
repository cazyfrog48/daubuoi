import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class ItemMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.menuItem}>
                <Icon name={this.props.name} color="#33adff" size={35} style={{padding: 12}}/>
                <Text style={styles.itemMenuText}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        padding: 20,
        alignItems: "center"
    },
    itemMenuText: {
        maxWidth: 130, 
        textAlign: "center"
    }
})

export default ItemMenu;