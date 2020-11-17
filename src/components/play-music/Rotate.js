import React, { Component } from 'react';
import { View, Easing, Animated, AsyncStorage } from 'react-native';

const images = [
    {
        source: require('../../assets/image/photo.jpg')
    },
    {
        source: require('../../assets/image/den.jpg')
    }
];

class Rotate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            out: '360deg',
            img: images[0].source,
            dem: 0
        }
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
        setInterval((dem = this.state.dem) => {
            dem += 1;
            if (dem == images.length) {
                dem = 0;
            }
            this.setState({
                img: images[dem].source,
                dem: dem
            })
        }, 5000);
    }

    spin = () => {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 20000,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start(this.spin)  // gọi lại chính nó khi đã hoàn thành 
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', this.state.out]  // rotate từ 0 đến 360 độ dựa vào input range 
        })
        const imageUrl = images[0];
        return (
            <View>
                <Animated.Image
                    style={{
                        width: 300, height: 300,
                        borderRadius: 200,
                        transform: [{ rotate: spin }],

                    }}
                    source={this.state.img} />
            </View>
        );
    }
}

export default Rotate;