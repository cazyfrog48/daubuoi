import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PlayList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.playListHeader}>
                <View>  
                    <Text>{this.props.numberPlayList ? this.props.numberPlayList : 0} playlist</Text>
                </View>
                <View style={styles.playListHeaderRight}>
                    <View style={styles.playListHeaderRight}>
                        <Icon name="plus-circle" size={18} color="#998c66"/>
                        <Text> Tạo mới</Text>
                    </View>
                    <View style={styles.playListHeaderRight}>
                        <Icon name="edit" size={18} color="#998c66"/>
                        <Text>Chỉnh sửa</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playListHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomColor: "#9494b8",
        borderBottomWidth: 0.3
    },
    playListHeaderRight: {
        flexDirection: "row",
        paddingLeft: 15
    }
})

export default PlayList