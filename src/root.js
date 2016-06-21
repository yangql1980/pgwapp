import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import {createMemoryHistory, Router, IndexRoute, Route} from 'react-router';
import {createNavigatorRouter} from 'react-native-navigator-router';

import App from './containers/app';
import About from  './containers/about';
import Detail from './containers/detail';
import Index from './containers/index';

class PGW extends Component {
    render() {
        return (
            <Router history={createMemoryHistory('/')}>
                <Route path='/' component={createNavigatorRouter()}>
                    <IndexRoute component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/index" component={Index}/>
                </Route>
            </Router>
        );
    }
}


export default PGW