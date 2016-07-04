import React, {Component,} from 'react'
import {View, Alert, ScrollView, Dimensions, TouchableHighlight, Text, StyleSheet, Linking} from 'react-native'

import styles from '../css/styles';
import api from '../common/config';
// import HTML from 'react-native-fence-html';
import Icon from 'react-native-vector-icons/FontAwesome';
var moment = require('moment');
var zh_cn = require('moment/locale/zh-cn');
import HtmlRender from 'react-native-html-render';
// import {link} from '../utils';

const {width, height} =Dimensions.get('window');
class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article_id: this.props.params.id,
            title: null,
            author: null,
            content: null,
            seo_title: null,
            keywords: null,
            uptime: null,
            description: null

        };
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    };

    static defaultProps() {
        return {
            key: 'article',
        };
    }

    componentDidMount() {

        this.fetchData();
        console.log('About article');
    }

    fetchData() {
        console.log('数据读取开始');
        // setTimeout(()=> {
        // console.log(api.home_article_detail);
        fetch(api.home_article_detail, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: 'id=' + this.props.params.id
        })
            .then((response)=>response.json())
            .then((responseData)=> {
                // console.log(responseData)
                if (responseData.code == 200) {
                    var index = responseData.data.indexs;
                    var body = responseData.data.bodys;
                    // body.content.replace(/style="(.*)"/g, '')
                    //     .replace(/&nbsp;/g, '')
                    //     .replace(/<p><\/p>/g, '')
                    //     .replace(/<br>/g, '');
                    this.setState({
                        title: index.title,
                        author: index.author ? index.author : '',
                        content: body.content ? body.content : '',
                        seo_title: body.seo_title ? body.seo_title : '',
                        keywords: body.seo_keywords ? body.seo_keywords : '',
                        uptime: index.uptime ? index.uptiem : '',
                        description: body.seo_description ? body.seo_description : ''
                    });
                    // console.log(body.content);

                } else if (responseData.code == 202) {
                    Alert.alert(
                        '获取失败',
                        '数据获取失败,请将此信息截图发给管理员,{code :' + responseData.code + ',article_detail+id:' + this.props.params.id + '}',
                        [
                            {text: '返回', onPress: () => this.context.router.go(-1)},
                        ]
                    )
                } else {
                    this.context.router.go('-1');
                }
            });
        // }, 20);

    }

    componentWillUnmount() {
        console.log('About article');
    }


    render() {
        var str = this.state.content;
        if (str)str = str
        // .replace(/<(.|\n)+?>/gi, "")
            .replace(/^\s{0,}[\r\n]/g, '')
            .replace(/\s[\r\n]/g, '')
            .replace(/\s/g, '');
        console.log(str);

        return (
            <View style={[styles.container,{alignItems:'flex-start'}]}>
                <Text style={textStyles.title}>

                    {this.state.seo_title ? this.state.seo_title : this.state.title}
                    <Icon name="angle-left" color="#4F8EF7" size={25}
                          style={{width:50,marginRight:10,fontSize:15,left:0}}
                          onPress={() => this.context.router.replace('/')}
                    >返回</Icon>
                </Text>
                <Text style={textStyles.author}>{this.state.author ? this.state.author : '未署名'}</Text>
                <Text style={textStyles.uptime}>{this.state.uptime}</Text>
                <ScrollView style={{padding:10}}>
                    <HtmlRender value={'<div>'+str+'</div>'} stylesheet={
                    {
                    pwrapper:{margin:0},
                    p:{
                    margin:0,
                    padding:0,
                    fontSize:14,
                    lineHeight:16}
                    }}/>
                </ScrollView>
            </View>
        );
    }
}

const textStyles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        width: width
    },
    author: {
        color: 'green',
        textAlign: 'center',
        width: width
    },
    uptime: {
        color: 'blue',
        textAlign: 'center',
        width: width,
    },
    content: {
        backgroundColor: '#ccc'
    },
    p: {
        margin: -10,
        padding: -10,
        fontSize: 12,
        lineHeight: 14
    }

});
export default Article
