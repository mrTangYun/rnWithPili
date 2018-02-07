/**
 * Created by tangyun on 2018/2/7.
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';


type Props = {};

let listSrc = `CCTV1综合,rtmp://zb.wyol.com.cn:80/TVLive/pindao_1_500
韩国KTV-HD,rtmp://218.38.152.31:1935/klive/klive.stream
日本台8,rtsp://c.itvitv.com/wowow.ghfyenxdhfdscz
韩国KCTV N，,rtmp://122.202.129.136:1935/live/ch4
韩国KCTV HD，,rtmp://122.202.129.136:1935/live/ch5
韩国PBC,rtmp://49.1.248.21:1935/live/mp4:tv
海外台|韩-CTS,rtmp://111.118.21.79/etv1/phd28
海外台|韩-KTV,http://218.38.152.69:1935/da_live/72136989/mp4:ch001/playlist.m3u8
泰国DDTV,rtmp://203.156.63.20:1935/live/ddtv
美国中文电视,http://media3.sinovision.net:1935/live/livestream/playlist.m3u8`;


const channelList = listSrc.replace(/\n/g, '$-$').split('$-$').map(item => {
	const itmObj = item.split(',');
	return {
		title: itmObj[0],
		source: itmObj[1]
	};
});
export default class App extends Component<Props> {
	_keyExtractor = (item, index) => item.title;
	render() {
		return (
			<FlatList
				data={channelList}
				keyExtractor={this._keyExtractor}
				renderItem={({item}) => <Text
					onPress={() => {
						this.props.chooseChannelHanderl(item);
				}}>{item.title}</Text>}
			/>
		);
	}
}