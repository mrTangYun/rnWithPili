import React, { pureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert
} from 'react-native';
import Player from './player';

export default class LivePlayer extends React.Component{
    state = {
        uri: ''
    };
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.uri) {
            this.getM3u8(nextProps.uri);
        } else{
            this.setState({
                uri: ''
            });
        }
    }

    getM3u8 = async (uri) => {
        await this.setState({
            uri: ''
        });
        if (/^https?:\/\//.test(uri)) {
            try {
                const result = await fetch(uri);
                const body = result._bodyText;
                if (/\#EXT\-X\-STREAM\-INF/g.test(body)) {
                    console.log(body);
                    this.setState({
                        uri
                    });
                } else {
                    this.setState({
                        uri
                    });
                }
            } catch (e) {
                Alert.alert('失败', '直播源失效');
            }
        } else {
            this.setState({
                uri
            });
        }
    };

    render () {
        return <Player uri={this.state.uri} />
    }
};