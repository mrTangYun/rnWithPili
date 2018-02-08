import React, { pureComponent } from 'react';

import {Player} from 'react-native-pili';

export default class LivePlayer extends React.Component{
    componentWillUnmount() {
        console.log('componentWillUnmount');
        // this.player && this.player.pause();
    }
    render () {
        return (<Player
            ref={node => {
                this.player = node;
            }}
            source={{
                uri: this.props.uri,
                controller: true, //Controller ui  Android only
                timeout: 10 * 1000, //live streaming timeout (ms) Android only
                live: true, //live streaming ? Android only
                hardCodec: false, //hard codec [recommended false]  Android only
            }}
            started={true} //iOS only
            muted={false} //iOS only
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }}
            onLoading={(e)=>{
                console.log('onLoading');
                console.log(e);
            }} //loading from remote or local
            onPaused={(e)=>{
                console.log('onPaused');
                console.log(e);
            }} //pause event
            onShutdown={(e)=>{
                console.log('onShutdown');
                console.log(e);
            }} //stopped event
            onError={(error)=>{
                console.log('onError');
                console.log(error);
            }} //error event
            onPlaying={(e)=>{
                console.log('onPlay');
                console.log(e);
            }} //play event
        />)
    }
};