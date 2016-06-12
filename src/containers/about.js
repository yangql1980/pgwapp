import React, { Component, } from 'react'
import { View, TouchableHighlight,Text,StyleSheet} from 'react-native'

import styles from '../css/styles';

class About extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'about',
    };
  }

  componentDidMount() {
    console.log('About mount');
  }

  componentWillUnmount() {
    console.log('About unmount');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.context.router.push('/detail')}>
          <Text style={styles.welcome}>
            This is About, go to detail.
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.context.router.push('/')}>
          <Text style={styles.welcome}>
            Press here to go back home.
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default About