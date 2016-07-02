import  React from  'react';
import {
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
    ActivityIndicatorIOS,
    ScrollView,
    StyleSheet,
    RefreshControl,
    Dimensions
} from 'react-native';


import api  from '../common/config';
// import moment from 'moment';
var moment = require('moment');
var zh_cn = require('moment/locale/zh-cn');
// import base64_decode from 'locutus/php/url/base64_decode';
// import Html from 'react-native-fence-html';
import HtmlRender from 'react-native-html-render';

// xss.whiteList

export default class ScrollList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataSource: null,
            page: 1,  //当前第几页
            num: 5,   //每页多少条数据
            scrollStyles: null
        }
    }


    componetDidMount() {
        console.log('滚动列表开始');
        this.fetchData();
    }

    fetchData() {
        console.log('开始读取数据,第' + this.state.page + '页');
        try {
            fetch(api.home_article, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: "page=" + this.state.page + '&num=' + this.state.num
            })
                .then((response) => response.json())
                .then((responseData)=> {
                    var data = [];
                    if (responseData.code == 200) {
                        // console.log("page="+this.state.page+'&num='+this.state.num);
                        console.log(responseData);
                        // for (i in responseData.data) {
                        //
                        //     // i.content = base64_decode(i.content);
                        //     data.push(i);
                        // }
                        // console.log('这是的订单',this.state.page);
                        if (this.state.page > 1) {
                            data = this.state.dataSource;
                            // console.log('怨谁',this.state.dataSource);
                            data = data.concat(responseData.data);

                            // console.log('进入啦啊',data);

                        } else
                            data = responseData.data;
                        // console.log('得到的最后数据',data);
                    } else if (responseData.code !== 200) {
                        var page = this.state.page;
                        this.setState({
                            page: page - 1,
                            refreshing: false
                        });
                        data = this.state.dataSource;
                    } else {
                        data.push({
                            title: '获取失败',
                            uptime: moment().format('L'),
                            content: '网络连接中断,获取数据失败!',
                        });
                        this.setState({
                            page: (this.state.page > 1) ? (this.state.page - 1) : 0
                        })
                    }
                    // console.log(data);
                    this.setState({
                        dataSource: data,
                        refreshing: false
                    });
                    console.log('读取数据结束');

                });
        } catch (e) {
            // console.log(e);
        }

    }

    handleScroll(e) {
//         console.log(e.nativeEvent);
        let scrollH = e.nativeEvent.contentSize.height;
        let y = e.nativeEvent.contentOffset.y;
        let height = e.nativeEvent.layoutMeasurement.height;
//         console.log('handle scroll', scrollH, y, height);
        if (scrollH - height < y)
            this._onEndfresh();
    }

    //下拉刷新
    _onRefresh() {
        this.setState({
            refreshing: true,
            page: 1
        });
        setTimeout(function () {
            console.log('下拉刷新', this.state.page);
            // fetch('https://www.baidu.com').then(()=> {
            //     this.setState({refreshing: false});
            // })
            this.fetchData();
        }.bind(this), 2000);
    }

    //上拉刷新
    _onEndfresh() {
        if (this.state.refreshing === true)
            return;
        var page = this.state.page;

        this.setState({
            refreshing: true,
            page: page + 1
        });
        setTimeout(function () {
            // alert('aaa');
            console.log('上拉刷新', this.state.page);
            // setTimeout(()=>fetch('https://www.baidu.com').then(()=> {
            //     this.setState({refreshing: false});
            // }), 2000);
            this.fetchData();
        }.bind(this), 2000);

    }

    _onLayout(e) {
        let y = e.nativeEvent.layout.y;
        let lefty = window.height - y - 45;
        this.setState({
            scrollStyles: {
                height: lefty,
            }
        });
        this.fetchData();
        // console.log(lefty);
    }

    render() {
        return (
            <View onLayout={(e)=>this._onLayout(e)} style={this.state.scrollStyles}>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={(e)=>this.handleScroll(e)}
                    refreshControl={
                        <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    scrollEventThrottle={200}
                    style={styles.scrollView}>
                    {this.state.dataSource
                        ?
                        this.state.dataSource.map(createThumbRow)
                        :
                        ()=> {
                            return (
                                <Text>
                                    暂无信息
                                </Text>
                            )
                        }
                    }
                    {this.state.refreshing ?
                        <ActivityIndicatorIOS
                            animating={this.state.refreshing}
                            style={ {height: 80,alignItems: 'center',    justifyContent: 'center',}}
                            size="large"
                            color="white"
                        />
                        :
                        <TouchableOpacity style={styles.button} onPress={() => { _scrollView.scrollTo({y: 0}); }}>
                            <Text>Scroll to top</Text>
                        </TouchableOpacity>
                    }

                </ScrollView>
            </View>
        )
    }
}

class Thumb extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    };

    render() {
        var str = this.props.data.content.replace(/<(.|\n)+?>/gi, "").replace(/[\r\0\s]{0,}/g,"");
        // console.log(str);
        return (
            <TouchableHighlight onPress={() => this.context.router.push('/article/'+this.props.data.article_id)}>
                <View style={styles.button}>
                    <Text>{this.props.data.title}</Text>
                    <Text>{ moment(this.props.data.uptime * 1000).format('lll')}</Text>
                    <HtmlRender value={'<p>'+str.substr(0,120)+'</p>'} stylesheet={{p:{fontSize:14,lineHeight:14},pwrapper:200}}/>
                </View>
            </TouchableHighlight>
        );
    }
}


var createThumbRow = (data, i) => <Thumb key={i} data={data}/>;

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

var styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#7A96d5',
        height: 300,
    },
    horizontalScrollView: {
        height: 100,
    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#ccc',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#887',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        margin: 2,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 3,
    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 64,
        height: 64,
    }
});