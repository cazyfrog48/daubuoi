import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.itemIcon}>
                    <Icon name={this.props.name} color="#33adff" size={18}></Icon>
                </View>
                <View style={styles.itemName}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.itemNavigation}>
                    <Icon name="angle-right" size={23} color="#9494b8" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: "#9494b8",
        padding: 20
    },
    itemIcon: {
        flex: 1.5
    },
    itemName: {
        flex: 10
    },
    itemNavigation: {
        flex: .4
    }
})

export default Item;