import React, { Component, } from 'react'
import { View,TouchableHighlight,Text,StyleSheet } from 'react-native'

import styles from '../css/styles';

class Detail extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'detail',
    };
  }

  componentDidMount() {
    console.log(window.location);

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
            This is detail, Press here to go back home.
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Detail