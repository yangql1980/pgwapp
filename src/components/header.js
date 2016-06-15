import React, {Component,} from 'react'
import {View, TouchableHighlight, Text, Image, StyleSheet} from 'react-native'

export default class Header extends Component {


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
                    <Text
                        style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'red'}}>
                        PinGang360
                    </Text>
                </View>
            </View>
        );
    }
}