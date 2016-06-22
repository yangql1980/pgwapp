import  React from  'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicatorIOS,
    ScrollView,
    StyleSheet,
    RefreshControl,
  Dimensions
} from 'react-native';

import * as globalStyles from '../css/styles';

export default class ScrollList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataSource: null,
            page: 1,
            scrollStyles:null
        }
    }

    componetDidMount() {
        console.log('滚动列表开始');
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

    //上拉刷新
    _onRefresh() {
        this.setState({
            refreshing: true
        });
        console.log('下拉刷新');
        fetch('https://www.baidu.com').then(()=> {
            this.setState({refreshing: false});
        })

    }

    //上拉刷新
    _onEndfresh() {
        this.setState({
            refreshing: true
        });
        // alert('aaa');
        console.log('上拉刷新');
        setTimeout(()=>fetch('https://www.baidu.com').then(()=> {
            this.setState({refreshing: false});
        }), 2000);

    }

    _onLayout(e){
      let y= e.nativeEvent.layout.y;
      let lefty= window.height-y-45;
      this.setState({
        scrollStyles:{
          height:lefty,
        }
      });
      console.log(lefty);
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
                    {THUMBS.map(createThumbRow)}
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

    render() {
        return (
            <View style={styles.button}>
                <Text>{this.props.data.name}</Text>
                <Text>{this.props.data.createtime}</Text>
                <Text>{this.props.data.description}</Text>
            </View>
        );
    }
}

var THUMBS = [
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
    {
        name: '搞工业4.0，离不开对数据灵魂的把握',
        createtime: '2015-12-01 00:00',
        description: '大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。'
    },
];

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