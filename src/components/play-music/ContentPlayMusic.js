import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, AsyncStorage,
    ScrollView
} from 'react-native';
import Rotate from './Rotate';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';


const Lyrics = [
    'Có người đến, có người đi và có người ở lại',
    'Có lúc khôn',
    'và cũng có lần nhỡ dại',
    'Có lúc tủi, có lúc vinh và có lúc thăng hoa',
    'Có ngày cười, có ngày khóc',
    'và có ngày hoan ca',
    'Đời cho ta quá nhiều thứ, ta chưa cho đời được nhiều',
    'Đến bây giờ vẫn chưa học được',
    'Cách làm sao để lời được nhiều.',
    'Mười năm như một bức họa',
    'Cũng đã may là trời đỡ xám hơn.',
    'Thứ mà ta học được nhiều nhất là cách xin lỗi và lời cảm ơn.',
    'Mặt trời là cái bếp lớn,',
    'Còn tia nắng là than hồng.',
    'Mỗi ngày mà ta thức dậy,',
    'Ta chỉ mong được an lòng.',
    'Hoàng hôn là dải lụa',
    'Còn màn đêm là tấm chăn.',
    'Mỗi đêm ta ngôi ta code, ta chỉ mong không bị cấm ngăn',
    'Nhởn nhơ trên con đường vắng',
    'Tự nhủ mình không cần tăng ga',
    'Lắng nghe cuộc đời như lá',
    'Lá rơi nghiêng như Trần Đăng Khoa',
    'Lời ca là chất kích thích',
    'Cho cuộc đời thêm phần thăng hoa',
    'Âm nhạc là cô gái đẹp, ta và nhạc',
    'có lần trăng hoa haha...',
    'Cuộc đời này có được mấy lần mười năm',
    'Sống làm sao khi khó còn',
    'được có những người thăm',
    'Nhắm mắt vào hồi tưởng',
    'chẳng có đâu mà dài',
    'Giống như LK ta vẫn tự hỏi',
    'Nhiều khi đen vâu là ai...'
]

class ContentPlayMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: "play-circle",
            dem: 0,
            colorHeart: "white",
            colorRycle: "white",
            colorRandom: "white",
            dem1: 0,
            dem2: 0,
            dem3: 0,
            process: 0,
            timeStart: '00:00',
            timeEnd: '03:40',
            valueRotate: '0deg',
            lyrics: '...',
            nextLyrics: '',
            chay: 0
        }
    }

    playMusic(dem) {
        this.setState({ dem: dem + 1 })
        if (dem % 2 == 0) {
            this.setState({
                play: "pause-circle",
                valueRotate: '360deg'
            });
            var time = this.convertTime(this.state.timeEnd);
            this.setIntervalPlay(time);
            if (this.state.process == 1) {
                this.setState({ play: "play-circle" })
            }
        } else {
            this.setState({
                play: "play-circle",
                process: this.state.process,
                valueRotate: '0deg'
            })
        }
    }

    setIntervalPlay(time) {

        var myVar = setInterval((process = this.state.process,
            timeStart = this.state.timeStart) => {
            var start = timeStart.split(':');
            var minuteStart = start[0];
            var secondStart = start[1];
            secondStart = parseInt(secondStart) + 1;
            if (secondStart >= 60) {
                secondStart = 0;
                minuteStart = '' + parseInt(minuteStart) + 1;
                console.log(minuteStart);
            }
            if (secondStart < 10 && minuteStart < 10) {
                this.setState({ timeStart: minuteStart + ':0' + secondStart });
            } else {
                this.setState({ timeStart: minuteStart + ':' + secondStart });
            }

            var chay = this.state.chay;
            this.setState({
                process: process + time,
                chay: chay + 1,
                lyrics: Lyrics[chay - 1],
                nextLyrics: Lyrics[chay],
            })

            if (this.state.dem % 2 != 0) {
                if (secondStart == this.state.timeEnd.split(':')[1]
                    && minuteStart == this.state.timeEnd.split(':')[0]) {
                    clearInterval(myVar);
                    this.setState({ play: "play-circle", process: 0, timeStart: '00:00' });
                }
            } else {
                clearInterval(myVar);
                this.setState({ play: "play-circle" });
            }

        }, 1000);
    }

    changeColor(number, dem) {
        if (number === 1) {
            this.setState({ dem1: dem + 1 })
            if (dem % 2 == 0) {
                this.setState({ colorRandom: "#944dff" })
            } else {
                this.setState({ colorRandom: "white" })
            }
        } else if (number === 2) {
            this.setState({ dem2: dem + 1 })
            if (dem % 2 == 0) {
                this.setState({ colorRycle: "#944dff" })
            } else {
                this.setState({ colorRycle: "white" })
            }
        } else {
            this.setState({ dem3: dem + 1 })
            if (dem % 2 == 0) {
                this.setState({ colorHeart: "#944dff" })
            } else {
                this.setState({ colorHeart: "white" })
            }
        }
    }

    convertTime(timeEnd) {
        var end = timeEnd.split(':');
        var minuteEnd = end[0];
        var secondEnd = end[1];
        var time;
        if (minuteEnd == 0) {
            time = 100 / secondEnd * 0.01;
        } else {
            time = 100 / (parseInt(minuteEnd) * 60 + parseInt(secondEnd)) * 0.01
        }
        return time;
    }

    previousMusic() {
        this.setState({
            process: 0,
            timeStart: '00:00',
            lyrics: '...',
            nextLyrics: Lyrics[0],
            chay: 0,
            play: 'play-circle'
        })
        setTimeout(() => this.setState({
            play: 'pause-circle'
        }), 500);
    }

    componentDidMount() {
        //  this.convertTime(this.state.timeEnd);
        this.setState({ nextLyrics: Lyrics[0] });
    }

    render() {

        return (
            <View>
                <View style={styles.containerPlayMusic}>
                    <Rotate valueFromParent={this.state.valueRotate} />
                    <ScrollView>
                        <Text style={{ paddingTop: 30, color: "#944dff", fontSize: 10, textAlign: "center" }}>{this.state.lyrics}</Text>
                        <Text style={{ paddingBottom: 10, color: "yello", fontSize: 10, textAlign: "center" }}>{this.state.nextLyrics}</Text>
                    </ScrollView>
                    <View style={{ paddingTop: 40, alignItems: "center", paddingBottom: 3 }}>
                        <Progress.Bar progress={this.state.process} width={320} />
                    </View>
                </View>
                <View style={styles.timeMusicPlay}>
                    <Text style={{ color: "#adadeb", fontSize: 10 }}>{this.state.timeStart}</Text>
                    <Text style={{ color: "#adadeb", fontSize: 10 }}>{this.state.timeEnd}</Text>
                </View>
                <View style={styles.contentPlayMusic}>
                    <View>
                        <TouchableOpacity onPress={() => this.changeColor(1, this.state.dem1)}>
                            <Icon name="random" color={this.state.colorRandom} size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => this.previousMusic()}>
                            <Icon style={{ paddingRight: 25 }} name="step-backward" color="white" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.playMusic(this.state.dem)}>
                            <Icon name={this.state.play} color="white" size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={{ paddingLeft: 25 }} name="step-forward" color="white" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.changeColor(2, this.state.dem2)}>
                            <Icon name="recycle" color={this.state.colorRycle} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.contentPlayMusic]}>
                    <TouchableOpacity onPress={() => this.changeColor(3, this.state.dem3)}>
                        <Icon name="heart" color={this.state.colorHeart} size={20}/>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "white", paddingRight: 5, fontSize: 12 }}>DANH SÁCH PHÁT</Text>
                        <Icon name="outdent" color="white" size={20}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerPlayMusic: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#3d3d5c",
        paddingTop: 20
    },
    contentPlayMusic: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "#3d3d5c",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 20
    },
    timeMusicPlay: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20
    }
}
)

export default ContentPlayMusic;