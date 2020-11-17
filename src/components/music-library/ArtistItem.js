import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class ArtistItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.itemIcon}>
                    <Image style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover'
                    }}
                        resizeMode='cover'
                        source={this.props.imgUri} />
                </View>
                <View style={styles.itemName}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.itemNavigation}>
                    <Icon name="angle-right" size={23} color="#9494b8"/>
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
        padding: 5
    },
    itemIcon: {
        flex: 1.5,
        width: 200,
        height: 45,
    },
    itemName: {
        flex: 9,
        alignSelf: "center",
        paddingLeft: 15
    },
    itemNavigation: {
        flex: .5,
        alignSelf: "center"
    }
})

export default ArtistItem;