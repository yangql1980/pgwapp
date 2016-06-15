import React, {Component,} from 'react'
import {View, Text, TouchableHighlight, Image, StyleSheet, ListView} from 'react-native'

import styles from '../css/styles';
import Loading from '../components/loading';
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
const mocked_data = [
    {title: '111', year: '2013', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
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
        }
    }

    componentDidMount() {
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
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={movieStyles.listView}
            />
        );

    }
}

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