import MusicFiles from 'react-native-get-music-files';
import React from 'react';
import DeviceEventEmitter from 'react-native';


class GetAllMusic extends React.Component {

    getAllMusic() {

        MusicFiles.getAll({
            blured: true, // works only when 'cover' is set to true
            artist: true,
            duration: true, //default : true
            cover: false, //default : true,
            genre: true,
            title: true,
            cover: true,
            minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
            fields: ['title', 'albumTitle', 'genre', 'lyrics', 'artwork', 'duration'] // for iOs Version
        }).then(tracks => {
            // do your stuff...
            console.log(tracks);
        }).catch(error => {
            // catch the error
        })
    }

    componentWillMount() {
        DeviceEventEmitter.addListener(
            'onBatchReceived',
            (params) => {
                this.setState({
                    songs: [
                        ...this.state.songs,
                        ...params.batch
                    ]
                });
            }
        )
        this.getAllMusic();
    }

    componentDidMount() {
        MusicFiles.getAll({
            id: true,
            blured: false,
            artist: true,
            duration: true, //default : true
            cover: true, //default : true,
            title: true,
            cover: true,
            batchNumber: 5, //get 5 songs per batch
            minimumSongDuration: 10000, //in miliseconds,
            fields: ['title', 'artwork', 'duration', 'artist', 'genre', 'lyrics', 'albumTitle']
        });
    }

}

export default GetAllMusic;