import React, {Component,} from 'react'
import {View, TouchableHighlight, Text,Image, StyleSheet} from 'react-native'

export default class Header extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:1,}}>
                <Image source={{uri: 'http://120.27.108.168/demohtml/app/images/pglogo.png'}} style={{ width:100,height:60 }}/>
            </View>
        );
    }
}