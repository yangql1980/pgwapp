import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import {createMemoryHistory, Router, IndexRoute, Route} from 'react-router';
import {createNavigatorRouter} from 'react-native-navigator-router';

import Reactotron from 'reactotron-react-native';

import App from './containers/app';
import About from  './containers/about';
import Detail from './containers/detail';
import Index from './containers/index';
import Article from './containers/article';

class PGW extends Component {
    render() {
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } })
        
        return (
            <Router history={createMemoryHistory('/')}>
                <Route path='/' component={createNavigatorRouter()}>
                    <IndexRoute component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/article/:id" component={Article}/>
                    <Route path="/index" component={Index}/>
                </Route>
            </Router>
        );
    }
}


export default PGW