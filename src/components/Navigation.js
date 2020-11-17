import React, { Component } from 'react';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NavigationHomePage from './NavigationHomePage';
import NavigationOnline from './NavigationOnline';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './Menu';

function TabBarHome({ state, descriptors, navigation, position }) {
    return (
        <View style={{
            flexDirection: 'row', padding: 20,
            justifyContent: "space-between", backgroundColor: "#33adff"
        }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="bars" color="white" size={18} />
            </TouchableOpacity>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const inputRange = state.routes.map((_, i) => i);
                const opacity = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 1)),
                });

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Animated.Text style={{ opacity, color: "white" }}>{label}</Animated.Text>
                    </TouchableOpacity>
                );
            })}
            <TouchableOpacity>
                <Icon name="search" color="white" size={18} />
            </TouchableOpacity>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Menu">
                    <Drawer.Screen name="Menu" component={NavigationHomePage} />
                    
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}


export default Navigation;