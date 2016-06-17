import React, {Component,} from 'react'
import {View, Text, TouchableHighlight, Image, StyleSheet, ListView} from 'react-native'

import Loading from '../components/loading';
import SwiperImage from '../components/swiper';
import Header from '../pages/header';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class Index extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=>row1 != row2
            }),
            loaded: false
            // loaded: true
        }
    }

    componentDidMount() {
        console.log('home 进入');
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true
                });
            })
            .done();
    }

    renderMovie(movie) {
        return (
            <View style={movieStyles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={movieStyles.thumbnail}
                />
                <View style={movieStyles.rightContainer}>
                    <Text style={movieStyles.title}>{movie.title}</Text>
                    <Text style={movieStyles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return <Loading />;
        }
        return (
            <View>
                <Header />
                <SwiperImage />

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    style={movieStyles.listView}
                />
            </View>
        );

    }
}
// <View>
    // <Text style={{color:'white',fontWeight:'bold',fontSize:50,textAlign:'center'}}>午休了!</Text>
// </View>
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