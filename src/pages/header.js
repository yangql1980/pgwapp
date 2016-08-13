import React, {Component,} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Header extends Component {


    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log('header amount');
    }

    render() {
        return (
            <View
                style={styles.container}>
                <View style={{width:200,height:50}}>
                    <Image
                        source={require('../images/logo.png')}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Icon.Button name="list" backgroundColor="#ccc" style={styles.icon}
                                 onPress={() => this.context.router.push('/about')}>
                    </Icon.Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FCFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height:50
    },
    image: {
        margin: 0,
        padding: 0,
        width: 180,
        height:50
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        height:50
    },
    icon: {
        width: 36,
        borderRadius: 0,
        alignSelf: 'center',
        height:36
    }
});

Header.contextTypes={
    router: React.PropTypes.object.isRequired
}