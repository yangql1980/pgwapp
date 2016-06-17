import React, {Component,} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, ListView} from 'react-native'

import Loading from '../components/loading';
import SwiperImage from '../components/swiper';
import Header from '../pages/header';
import ScrollList from '../pages/scrolllist';

// const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class Index extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            // dataSource: new ListView.DataSource({
            //     rowHasChanged: (row1, row2)=>row1 != row2
            // }),
            loaded: false
            // loaded: true
        }
    }

    componentDidMount() {
        console.log('home 进入');
        setTimeout(()=>this.setState({
            loaded:true,
        }),2);
        // this.fetchData();
    }
    //
    // fetchData() {
    //     fetch(REQUEST_URL)
    //         .then((response)=>response.json())
    //         .then((responseData)=> {
    //             this.setState({
    //                 dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
    //                 loaded:true
    //             });
    //         })
    //         .done();
    // }

    // renderMovie(movie) {
    //     return (
    //         <View style={movieStyles.container}>
    //             <Image
    //                 source={{uri: movie.posters.thumbnail}}
    //                 style={movieStyles.thumbnail}
    //             />
    //             <View style={movieStyles.rightContainer}>
    //                 <Text style={movieStyles.title}>{movie.title}</Text>
    //                 <Text style={movieStyles.year}>{movie.year}</Text>
    //             </View>
    //         </View>
    //     )
    // }

    render() {
        if (!this.state.loaded) {
            return <Loading />;
        }
        return (
            <View>
                <Header />
                <SwiperImage />

                <View style={styles.toolContainer}>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')} >
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/1a.jpg'}}
                               resizeMode="contain"
                               style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')} >
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/2a.jpg'}}
                               resizeMode="contain"
                               style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')} >
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/3a.jpg'}}
                               resizeMode="contain"
                               style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.context.router.push('/')} >
                        <Image source={{uri:'http://120.27.108.168/demohtml/app/images/4a.jpg'}}
                               resizeMode="contain"
                               onPress={()=>this.context.router.push('/')}
                               style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <ScrollList />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 80,
        marginLeft: 5,
        marginTop: 5,
    },
    toolContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        width: 400,
        height: 180,
        backgroundColor:'white',
        paddingTop: 5,
        paddingBottom: 5,
    }
});
const movieStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 52,
        height: 81,
        marginLeft: 3
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});
export default Index