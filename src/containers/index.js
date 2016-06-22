import React, {Component,} from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ListView} from 'react-native'

import Loading from '../components/loading';
import SwiperImage from '../components/swiper';
import Header from '../pages/header';
import ScrollList from '../pages/scrolllist';


class Index extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        console.log('home 进入');
        setTimeout(()=>this.setState({
            loaded: true,
        }), 2);
    }


    render() {
        if (!this.state.loaded) {
            return <Loading />;
        }
        return (
            <View>
                <Header />
                <SwiperImage />

                <View style={styles.toolContainer}>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')}>
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/1a.jpg'}}
                               resizeMode="contain"
                               style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')}>
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/2a.jpg'}}
                               resizeMode="contain"
                               style={[styles.image,{marginLeft:5}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')}>
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/3a.jpg'}}
                               resizeMode="contain"
                               style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')}>
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/4a.jpg'}}
                               resizeMode="contain"
                               onPress={()=>this.context.router.push('/')}
                               style={[styles.image,{marginLeft:5}]}/>
                    </TouchableOpacity>
                </View>
                <ScrollList />
            </View>
        );

    }
}


let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
    image: {
        width: (window.width - 5) / 2,
        height: ((window.width - 10) / 2 - 18) / 2,
        marginTop: 3
    },
    toolContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        width: window.width,
        height: (window.width - 30) / 2,
        backgroundColor: 'white',
    }
});
export default Index