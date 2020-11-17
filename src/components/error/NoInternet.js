import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ToastAndroid } from 'react-native';

class NoInternet extends Component {

    linkError = () => {
        ToastAndroid.show('Chưa làm chức năng này', ToastAndroid.LONG);
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={70} color="#0000ff" />
                <View style={styles.textError}>
                    <Text style={{fontSize: 20}}>Mất kết nối mạng, vui lòng thử  lại</Text>
                    <Text>Xảy ra lỗi, chạm màn hình để thử lại</Text>
                    <TouchableOpacity onPress={this.linkError}>
                        <Text style={styles.textLink}>Hướng dẫn kiểm tra kết nối</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 400,
        flexDirection: "column",
    },
    textError: {
        alignContent: "center",
        alignItems: "center",
        margin: 50
    },
    textLink: {
        textDecorationLine: "underline",
        color: "#33adff",
        padding: 5
    }
})

export default NoInternet;