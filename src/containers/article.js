import React, {Component,} from 'react'
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native'

import styles from '../css/styles';
import api from '../common/config';

class Article extends Component {

    constructor(props){
        super(props);
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
        fetch(api.home_article)

        console.log('About detail');
    }

    componentWillUnmount() {
        console.log('About detail');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.context.router.replace('/')}>
                    <Text style={styles.welcome}>
                        This is article, Press here to go back home.
                        {this.props.params.id}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default Article