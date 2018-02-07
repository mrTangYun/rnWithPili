/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Dimensions
} from 'react-native';
import {Player} from 'react-native-pili';
import NavList from './components/navList';


const windowSize = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      uri: '',
        title: ''
    };
  }
    chooseChannelHanderl = ({title, source}) => {
      console.log(title, source);
      this.setState({
          uri: source,
          title: title
      });
    };

  render() {
    const {uri, title} = this.state;
    return (
      <View style={styles.container}>

          {
	          uri ?  (
                  <Player
                      source={{
				          uri: uri,
				          controller: true, //Controller ui  Android only
				          timeout: 10 * 1000, //live streaming timeout (ms) Android only
				          live:true, //live streaming ? Android only
				          hardCodec:false, //hard codec [recommended false]  Android only
			          }}
                      started={true} //iOS only
                      muted={false} //iOS only
                      style={{
	                      position: 'absolute',
	                      left: 0,
	                      top: 0,
	                      width: windowSize.width,
	                      height: windowSize.height
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
                  />
              ) : null
          }
        <View style={{
	        position: 'absolute',
	        left: 0,
	        top: 0,
	        height: windowSize.height,
            backgroundColor: 'rgba(255,255,255, 0.5)'
        }}>
          <NavList chooseChannelHanderl={this.chooseChannelHanderl}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
