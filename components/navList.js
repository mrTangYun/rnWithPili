/**
 * Created by tangyun on 2018/2/7.
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
    TouchableHighlight
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
美国中文电视,http://media3.sinovision.net:1935/live/livestream/playlist.m3u8
HBO_HD,http://3-120heat.pulsedmedia.com/public-llave1/kr/hb0hd/Stream(01).m3u8
HBOPLUS,http://3-120heat.pulsedmedia.com/public-llave1/kr/hb0plus/index.m3u8
HBO_FAMILY,http://3-120heat.pulsedmedia.com/public-llave1/kr/hb0fam/index.m3u8
HBO2,http://3-120heat.pulsedmedia.com/public-llave1/kr/hb02/index.m3u8
黄河卫视,http://live3.sxrtv.com/flvss?bitrate=512000&channel=HuangHeNews&start=0&provider=www.tvmining.com
延边卫视,http://live.ybtvyun.com/video/s10006-cys/index.m3u8
延边-1,http://live.ybtvyun.com/video/s10006-ybtv1/index.m3u8
延边-2,http://live.ybtvyun.com/video/s10006-ybtv2/index.m3u8
鄂尔多斯蒙语新闻综合,rtmp://olive.ordosrt.com/live/v3
新疆2台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv2.m3u8
新疆3台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv3.m3u8
新疆4台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv4.m3u8
新疆5台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv5.m3u8
新疆7台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv7.m3u8
新疆8台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv8.m3u8
新疆9台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv9.m3u8
新疆10台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv10.m3u8
新疆11台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv11.m3u8
新疆12台,http://playback-livehyuwxjtv122qn.sobeycache.com/sobeylive/xjtv12.m3u8
內蒙古2,http://stream.nmtv.cn/2/sd/live.m3u8
內蒙古3,http://stream.nmtv.cn/3/sd/live.m3u8
內蒙古4,http://stream.nmtv.cn/4/sd/live.m3u8
內蒙古5,http://stream.nmtv.cn/5/sd/live.m3u8
內蒙古6,http://stream.nmtv.cn/6/sd/live.m3u8
內蒙古7,http://stream.nmtv.cn/7/sd/live.m3u8
內蒙古8,http://stream.nmtv.cn/8/sd/live.m3u8
中国教育1,http://112.27.218.61:8112/120000001002/GCETV1/index.m3u8
中国教育2,http://112.27.218.61:8112/120000001002/GCETV2/index.m3u8
中国教育3,http://112.27.218.61:8112/120000001002/G_CETV-3/index.m3u8
中国教育4,http://112.27.218.61:8112/120000001002/G_CETV-4/index.m3u8
香港卫视,rtmp://live.hkstv.hk.lxdns.com/live/hks
澳门卫视,http://live.mastvnet.com/iVx460D/500/live.m3u8
澳门卫视,http://61.216.177.73/sta/ch17114112.m3u8 
澳视卫星,http://live3.tdm.com.mo:1935/ch3/ch3.live/chunklist_w935270855.m3u8
澳亚卫视,http://live.mastvnet.com/n1rtlHG/500/live.m3u8
澳亚卫视,http://61.216.177.73/sta/ch17114111.m3u8 
星空卫视,http://61.216.177.73/sta/ch17114101.m3u8
阳光卫视,http://61.216.177.73/sta/ch17114137.m3u8 
莲花卫视,http://61.216.177.73/sta/ch17114136.m3u8 
东盟卫视,http://mvtv.dyndns.tv:1935/live/mgtv/playlist.m3u8
亚太第一卫视,http://v1.one-tv.com:1935/live/mpegts.stream/playlist.m3u8
中华卫视,http://pull.kapad.cn/live/livechtv/playlist.m3u8
健康卫视,http://live.jkwshk.tv/AppName/StreamName.m3u8
凤凰卫视中文台,http://61.216.177.73/sta/ch17114106.m3u8 
凤凰卫视资讯台,http://61.216.177.73/sta/ch17114105.m3u8 
凤凰卫视香港台,http://61.216.177.73/sta/ch17114107.m3u8 
凤凰卫视中文台,http://live.fengshows.com/live/PCC_500k/index.m3u8
凤凰卫视资讯台,http://live.fengshows.com/live/PIN_500k/index.m3u8 
凤凰卫视香港台,http://live.fengshows.com/live/PHK_500k/index.m3u8
凤凰卫视美洲台,http://live.italkdd.com/ts027/channel_056.m3u8
香港TVB翡翠台,http://acm.gg/jade.m3u8
香港TVB明珠台,http://liveal.quanmin.tv/live/1517208580.m3u8
香港TVB星河台,p2p://c.jdf.so:6005/5a39d26e00004f2fe920cf5e0835356a&link=kzzforzl2u
香港TVB娱乐新闻台,http://token.tvb.com/stream/live/enews/hls/mobilehd_enews.smil
香港HKTV台,http://14.198.245.166:8080/enc2/04.m3u8?t=12e9a7f66f3a892b396e94d81206eb6c&udid=a42bc0b5ac8dc21cb14f66924a25f468&uid=1&vid=1&mxres=1920&s=35556a8d92fa04b373ca45fa5f35c36a&cname=index2
香港ATV本港台,http://antennalem-lh.akamaihd.net/i/YR2KW_1@324049/index_1800000_av-p.m3u8
香港耀才财经台,http://202.69.67.66:443/webcast/bshdlive-mobile/playlist.m3u8
美亚电影台,
天映经典电影台,http://gtlive.wowotv.tw/glive/celclassic/playlist.m3u8?st=1493933631410&token=NGFlN2U1NTEyNjgyNmUwYjE3M2VhZmMxMDVhM2ZlNzRhNDEyZmJkOQ==
澳视澳门台,http://live4.tdm.com.mo:80/ch1/_definst_//ch1.live/playlist.m3u8
澳视葡语台,http://live4.tdm.com.mo:80/ch2/_definst_//ch2.live/playlist.m3u8
澳视体育台,http://live3.tdm.com.mo:1935/ch4/sport_ch4.live/chunklist_w1608596921.m3u8
澳视体育台,rtmp://live4.tdm.com.mo:80/ch4/_definst_//sport_ch4.live 
澳视资讯台,rtmp://live4.tdm.com.mo:80/ch5/_definst_//info_ch5.live 
澳视高清台,http://live3.tdm.com.mo:1935/ch6/hd_ch6.live/media_w2145388172.m3u8
澳视高清台,rtmp://live4.tdm.com.mo:80/ch6/_definst_//hd_ch6.live
台视,http://gtlive.wowotv.tw/glive/ttv/playlist.m3u8?st=1493689629935&token=OTdiOWRmNzZjOGYyZWQzNmE2NzgyNmY1OGNlOTUyODU2ZTZmYTcyNw==
华视,http://gtlive.wowotv.tw/glive/cts/playlist.m3u8?st=1493901531008&token=MDBiZjc3MDNkZGE1YzljYTRkNTc5NThhYTUxOWI3MTUyNDRhYmIwZg==
民视,http://gtlive.wowotv.tw/glive/ftvw/playlist.m3u8?st=1493901490186&token=MGY3YjBmMzc1M2ZkNDhlODViNmM0ZThkZGI0OWY1Y2VmNTc4YWFjNQ==
中视,http://gtlive.wowotv.tw/glive/ctv/playlist.m3u8?st=1493901271539&token=N2U4N2ZhMzA2MTRkNTFmMDY1ZTFkYzUwYTI4MDJiMmZjOTg2NTVlOA==
公视,http://gtlive.wowotv.tw/glive2/pts2l/playlist.m3u8?st=1493901668396&token=MWVjZjFkNzc4MmI2Y2Y4ODBhNjhmNjQ5NjFiOWZmOWZlZTg3NDExNQ==
民视综艺台,http://gtlive.wowotv.tw/glive/program/playlist.m3u8?st=1493899737327&token=ZmY2NmY1ZWJkZjRkMDM0Y2VkMGU4ODhmZmJkNDNiNzRkODJlYjZiZA==
民视影戏台,http://gtlive.wowotv.tw/glive/drama/playlist.m3u8?st=1493897795446&token=NmU5MDI5OTA5YjUxNzIxNjlhMTc1MGQ3MTdmODFhMDk3OGQyMWRjYw==
民视旅游台,http://gtlive.wowotv.tw/glive/ftvtravel/playlist.m3u8?st=1493900647471&token=NzMxZmIxM2IxZWQ2OGY1NDBmNTU4N2NiYmVjNDUyODdiMTAwYTNjMQ==
台視綜合台,http://gtlive.wowotv.tw/glive2/tcch10/playlist.m3u8?st=1493901633159&token=YjllZmE3NmI5NWI5ZjA5NDE5ZjJlZjI2M2QxNmQwYTRlYjVkYjBhYQ==
台視新聞台,http://gtlive.wowotv.tw/glive2/tcch07/playlist.m3u8?st=1493896281060&token=YTZhODkzMzFjNWRmMzhmNDc4NzVlMjVkZjZlZWI1ZDIyMmNjMDczZQ==
中視經典台,http://gtlive.wowotv.tw/glive/ctvclassic/playlist.m3u8?st=1493899630706&token=NWM1ZTUxOTBmZmZhM2VlMjQxMTgzYjViNzNmNzc5MjYwMDk3MzAyZQ==
中視菁采台,http://gtlive.wowotv.tw/glive2/ctvhd_n/playlist.m3u8?st=1493901226040&token=YTMxNzI5ZGQxNzAzYzI3MmQ5MGRjNzUzNDA3YjgyODZmYWU1ODdhYw==
中視新聞台,http://gtlive.wowotv.tw/glive/ctvnews/playlist.m3u8?st=1493896226489&token=MjBlNDliMGYxMmQ2NDAxYWM3Yjk1MzlkMTE4NjMyYzcwYzYxOTdkMQ==
公視戲劇台,http://gtlive.wowotv.tw/glive2/ptsdramal/playlist.m3u8?st=1493897682224&token=MTk3Mzk2Y2MyMDU2YzlhZTU2Zjk3MjUyOGI0ZWYxMjBjNmVlYmU2Yg==
中天新聞台,http://gtlive.wowotv.tw/glive2/ctinews_n/playlist.m3u8?st=1493896072779&token=MzBiMWMwYjE5YjJmNTA4ZDFmZWZhM2QyY2EwNmJkYWUzM2VkMjVkOA==
中天亞洲台,http://gtlive.wowotv.tw/glive2/ctiasia/playlist.m3u8?st=1493901836956&token=MzNiMTdkZmI4YjRlYTU0NmM4ZTg0MTBkZTFmZDU0NjFhNjA2YzlkMQ==
中天綜合台,http://gtlive.wowotv.tw/glive/ctiall/playlist.m3u8?st=1493900683163&token=NTk2YTIxOGRlZTE3ZGExOTIwZjM4YzU2OWE4MjUwZDJlZjYxYzJkMA==
非凡新聞台,http://gtlive.wowotv.tw/glive/ustvhd/playlist.m3u8?st=1493896590555&token=YzE2NjQ2OWM0OWQ3MTcwNmJlYzIxYzg0ODFkOGExOWZmZDIwNThmNg==
非凡美食台,http://gtlive.wowotv.tw/glive2/tcch21/playlist.m3u8?st=1493900527288&token=ZGE5MmY4MWYxMWJhN2FkMDhiNTc1OTJlZmEyMGY5MzVkM2VhMjZiOQ==
非凡商業台,http://gtlive.wowotv.tw/glive/ustvbiz/playlist.m3u8?st=1493896625875&token=Y2ZjMWU5NjU2ZGFhOWE5NTEwZTdhMWYwNzczNWNjMWI3NzQzMzk0Mw==
三立新聞台,http://gtlive.wowotv.tw/glive/setnews/playlist.m3u8?st=1493896535259&token=ZTE0MWNhOGM2NTM5NTgzMGJkYmZhOWI3ODZlY2JiOTJjN2JhMWYzMw==
大愛1台,http://gtlive.wowotv.tw/glive/di/playlist.m3u8?st=1493901411089&token=MjY4MzM4M2RmNzk3ZTNkMmU1NTBhMjg2YmVhMzE2ZGZiOTBiNDY2Zg==
大愛2台,http://gtlive.wowotv.tw/glive/di2l/playlist.m3u8?st=1493901385315&token=MDMyZjU1NTUyMGZmN2YxNmYwZmEwYzBjM2Q1OWMyZjg1MDJmYWFjYQ==
采昌,http://61.216.177.73/sta/ch17114099.m3u8
靖天综合台,http://61.58.60.247:9000/live/242.m3u8
靖天日本台,http://61.58.60.247:9000/live/243.m3u8
靖天映画台,http://61.58.60.247:9000/live/244.m3u8
靖天电影台,http://61.58.60.247:9000/live/245.m3u8
靖天戏剧台,http://61.58.60.247:9000/live/246.m3u8
国家地理野生,vjms://14.17.70.49:8500/live/cid=263
台湾佛教,rtmp://hk2.hwadzan.com/liveedgelist/livetv
美国中文电视,http://media3.sinovision.net:1935/live/livestream/playlist.m3u8`;


const channelList = listSrc.replace(/\n/g, '$-$').split('$-$').map(item => {
	const itmObj = item.split(',');
	return {
		title: itmObj[0],
		source: itmObj[1]
	};
});
export default class App extends Component<Props> {
	_keyExtractor = (item, index) => item.title + index;
	render() {
		return (
			<FlatList
				data={channelList}
				keyExtractor={this._keyExtractor}
				renderItem={({item}) => <TouchableHighlight
                    style={{
                        height: 40
                    }}
                    onPress={() => {
                        this.props.chooseChannelHander(item);
                    }}
                >
                    <Text
                        style={{
                            height: 40,
                            lineHeight: 40
                        }}>{item.title}</Text>
                </TouchableHighlight>}
			/>
		);
	}
}