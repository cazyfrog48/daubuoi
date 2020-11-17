import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import Item from './Item';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuItem from './ItemMenu';
import HeaderNCT from './HeaderNCT';
import * as Progress from 'react-native-progress';

import { Actions } from 'react-native-router-flux';
import { Header } from 'native-base';
import PlayingMusic from './PlayingMusic';

class HomePage extends React.Component {

    goToMusicLibrary = () => {
        Actions.MusicLibrary();
    }

    goToPlayList = () => {
        Actions.PlayList();
    }

    goToVideo = () => {
        Actions.Video();
    }

    goToPlayMusic = () => {
        Actions.PlayMusic();
    }

    render() {
        return (
            <ScrollView bounces="true">
                <HeaderNCT />
                <View style={{ backgroundColor: "#EEE" }}>
                    <View style={styles.hpHeader}>

                        <View style={styles.thumbContainer}>
                            <Image style={{
                                flex: 1,
                                width: undefined,
                                height: undefined,
                                resizeMode: 'cover'
                            }}
                                resizeMode='cover'
                                source={require('../assets/image/header.jpg')} />
                        </View>
                    </View>
                    <View style={styles.hpCard}>
                        <View style={styles.hpCardTitle}>
                            <Text style={styles.hpTitle}>Nhạc của tui</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name="cloud" color="#b3b3cc"></Icon>
                                <Text style={{ color: "#b3b3cc" }}> 0/1000</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.goToPlayList}>
                                <Item name="music" title="Playlist" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToVideo}>
                                <Item name="play-circle" title="Video" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.hpCard}>
                        <View style={styles.hpCardTitle}>
                            <Text style={styles.hpTitle}>Offline</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.goToMusicLibrary}>
                                <Item name="play" title="Thư viện nhạc" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Item name="play-circle" title="Video" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Item name="download" title="Đang tải" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.hpCard}>
                        <View style={styles.hpCardMenu}>
                            <TouchableOpacity>
                                <MenuItem name="signal" title="Miễn phí 3G" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MenuItem name="heart" title="Nhạc của tui VIP" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MenuItem name="calendar" title="Chủ đề" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.hpCardMenu}>
                            <TouchableOpacity>
                                <MenuItem name="history" title="Lịch sử" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MenuItem name="mobile" title="Chuyển nhạc qua thiết bị khác" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MenuItem name="qrcode" title="QR Code" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.hpCard}>
                        <View>
                            <Text style={styles.hpFooter}>Tổng dung lượng 50.0GB / Khả dụng 27.2GB</Text>
                        </View>
                        <View style={{ alignItems: "center", paddingBottom: 25, marginHorizontal: 20 }}>
                            <Progress.Bar progress={0.5} width={360} />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.goToPlayMusic}>
                            <PlayingMusic />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    thumbContainer: {
        width: '100%',
        height: 100,
    },
    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    hpCard: {
        marginTop: 10,
        backgroundColor: "white"
    },
    hrTitle: {
        marginLeft: 10,
        backgroundColor: "#EEE"
    },
    hpCardTitle: {
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "#b3b3cc",
        fontSize: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    hpCardMenu: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    hpFooter: {
        padding: 15,
        fontSize: 12,
    }
})

export default HomePage;