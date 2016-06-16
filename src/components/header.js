import React, {Component,} from 'react'
import {View, TouchableHighlight, Text, Image, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Header extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View
                style={{flex:1,flexDirection:'row',backgroundColor:'#FCFFFF',justifyContent:'center',alignItems:'center'}}>
                <Image
                    source={require( '../images/logo.png')}
                    resizeMode="cover"
                    style={{ margin:0,padding:0 }}
                />
                <View style={{flex:1}}>
                    <Icon.Button name="book" backgroundColor="blue" style={{height:60,borderRadius:0,}} onPress={() => this.context.router.push('/about')}>
                        快捷菜单
                    </Icon.Button>
                </View>
            </View>
        );
    }
}