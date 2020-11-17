import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import ItemMusic from './ItemMusic';
import Icon from 'react-native-vector-icons/FontAwesome';
import songs from './data';


class MenuItemMusic extends React.Component {

    render() {
        return (
            <>
                <View style={styles.menuItemMusicHeader}>
                    <View style={styles.menuItemHeaderLeft}>
                        <Icon name="play-circle" size={20} />
                        <Text> Nghe ngẫu nhiên</Text>
                    </View>
                    <View style={styles.menuItemHeaderRight}>
                        <Icon name="sort" size={20} color="#a3a3c2" />
                        <Text> </Text>
                        <Icon name="edit" size={20} color="#a3a3c2" />
                    </View>
                </View>
                <View>
                    <FlatList data={songs}
                        renderItem={({ item }) => <ItemMusic title={item.title} />}
                        keyExtractor={item => item.id}>
                    </FlatList>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    menuItemMusicHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#9494b8",
        borderBottomWidth: 0.5
    },
    menuItemHeaderLeft: {
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
        flex: 10,
    },
    menuItemHeaderRight: {
        padding: 15,
        flexDirection: "row",
        paddingRight: 20,
        alignItems: "center",
        flex: 2,
        justifyContent: "space-between"
    }
})

export default MenuItemMusic;