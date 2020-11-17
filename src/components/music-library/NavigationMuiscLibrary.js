import React, { Component } from 'react';
import MenuItemMusic from './MenuItemMusic';
import PlayList from './Playlist';
import Artist from './Artist';
import Album from './Album';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import HomePage from '../HomePage';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tabs, Tab, TabHeading, Container, ScrollableTab } from 'native-base';

// function MyTabBar({ state, descriptors, navigation, position }) {
//   return (
//     <View style={{
//       flexDirection: 'row', padding: 20,
//       justifyContent: "space-around", backgroundColor: "#e0e0eb"
//     }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//               ? options.title
//               : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//         // modify inputRange for custom behavior
//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = Animated.interpolate(position, {
//           inputRange,
//           outputRange: inputRange.map(i => (i === index ? 1 : 1)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//           >
//             <Animated.Text style={{ opacity }}>{label}</Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

function NavigationMusicLibrary() {
  return (
    <Tabs renderTabBar={() => <ScrollableTab />}>
      <Tab heading={<TabHeading><Text style={styles.titleMusicLibrary}>Bài hát</Text></TabHeading>}>
        <MenuItemMusic />
      </Tab>
      <Tab heading={<TabHeading><Text style={styles.titleMusicLibrary}>PlayList</Text></TabHeading>}>
        <PlayList />
      </Tab>
      <Tab heading={<TabHeading><Text style={styles.titleMusicLibrary}>Nghệ sĩ</Text></TabHeading>}>
        <Artist />
      </Tab>
      <Tab heading={<TabHeading><Text style={styles.titleMusicLibrary}>Album</Text></TabHeading>}>
        <Album />
      </Tab>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  titleMusicLibrary: {
    color: "white"
  }
})

export default NavigationMusicLibrary;