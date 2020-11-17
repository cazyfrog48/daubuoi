import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FooterPlayMusic extends Component{

    render(){
        return(
            <View style={styles.footerPlayMusic}>
                <Icon name="mobile" size={12} color="white"/>
                <Text style={{color: "white", fontSize: 12, paddingLeft: 5}}>Đang phát bài hát local</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerPlayMusic: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#47476b",
        flex: 1,
        justifyContent: "center"
    }
})

export default FooterPlayMusic;