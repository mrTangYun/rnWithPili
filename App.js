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
import NavList from './components/navList';
import LivePlayer from './components/live-player';


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
    chooseChannelHander = ({title, source}) => {
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
        <LivePlayer uri={uri} />
        <View style={{
	        position: 'absolute',
	        left: 0,
	        top: 0,
	        height: windowSize.height,
            backgroundColor: 'rgba(255,255,255, 0.5)'
        }}>
          <NavList chooseChannelHander={this.chooseChannelHander}/>
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
