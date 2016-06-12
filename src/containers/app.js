import React, { Component, } from 'react'
import { Text, TouchableHighlight} from 'react-native'

import TabBarIOSView from '../components/tabbariosview';

import styles from '../css/styles';

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'home',
    };
  }

  componentDidMount() {
    console.log('Main mount');
  }

  componentWillUnmount() {
    console.log('Main unmount');
  }

  render() {
    return (
      <TabBarIOSView />
    );
  }
}
// <View style={styles.container}>
//         <TouchableHighlight onPress={() => this.context.router.push('/about')}>
//           <Text style={styles.welcome}>
//             This is Home, go to About.
//           </Text>
//         </TouchableHighlight>
//       </View>

export default App