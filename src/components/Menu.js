import React, { Component } from 'react';
import { View } from 'react-native';
import ItemMenu from './ItemMenu';

class Menu extends React.Component {

    render() {
        return(
            <>
                <ItemMenu name="home" title="Trang chủ" />
                <ItemMenu name="user" title="Đăng nhập" />
            </>
        )
    }
}

export default Menu;