import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import NCTVideo from './video/NCTVideo';
import { Text, StyleSheet } from 'react-native';
import { Container, Tabs, Tab, ScrollableTab, Icon, TabHeading } from 'native-base';
import HomeOnline from '../components/online/HomeOnline';

function NavigationOnline() {
    return (
        <Container>
            <Tabs renderTabBar={() => <ScrollableTab />} style={{backgroundColor: "white"}}>
                <Tab style={styles.tabOnlineItem} heading={<TabHeading><Icon name="home"/><Text></Text></TabHeading>}>
                    <HomeOnline />
                </Tab>
                <Tab style={styles.tabOnlineItem} heading={<TabHeading><Icon name="PlayCircleOutlined" type="AntDesign"/><Text></Text></TabHeading>}>
                    <HomeOnline />
                </Tab>
                <Tab style={styles.tabOnlineItem} heading={<TabHeading><Icon name="home"/><Text></Text></TabHeading>}>
                    <HomeOnline />
                </Tab>
                <Tab style={styles.tabOnlineItem} heading={<TabHeading><Icon name="home"/><Text></Text></TabHeading>}>
                    <HomeOnline />
                </Tab>
                <Tab style={styles.tabOnlineItem} heading={<TabHeading><Icon name="home"/><Text></Text></TabHeading>}>
                    <HomeOnline />
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({
    tabOnline: {
        backgroundColor: "white",
        flexDirection: "row"
    },
    tabOnlineItem: {
        flexDirection: "column"
    }
})

export default NavigationOnline;