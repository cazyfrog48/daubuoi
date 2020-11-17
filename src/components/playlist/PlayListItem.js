import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PlayListItem extends React.Component {

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
                    <View style={styles.playListTitle}>
                        <Icon name="circle" size={10} color="#33adff" />
                        <Text style={{
                            color: "#9494b8", 
                            fontSize: 11
                        }}> Đã đồng bộ 3/3 bài hát</Text>
                    </View>
                </View>
                <View style={styles.itemNavigation}>
                    <Icon name="angle-right" size={23} color="#9494b8" />
                </View>
            </View>
        )
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
    },
    playListTitle: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default PlayListItem;