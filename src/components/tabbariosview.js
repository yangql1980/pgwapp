import React, {Component,} from 'react'
import {View, TabBarIOS} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import About from '../containers/about';
import Detail from '../containers/detail';
import Index from '../containers/index';


const tabBarItems = [
    {title: '首页', icon: 'home', component: Index},
    {title: '我要接单', icon: 'reorder', component: Detail},
    {title: '我要发布', icon: 'pencil-square-o', component: About},
    {title: '会员中心', icon: 'user', component: Detail},
];

export default class TabBarIOSView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }

    render() {
        return (
            <TabBarIOS tintColor={'rgb(217, 51, 58)'}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <FontAwesome.TabBarItem
                                key={i}
                                title={controller.title}
                                iconName={controller.icon}
                                selectedIconName={controller.icon}
                                selected={this.state.selectedTab === controller.title}
                                onPress={() => {
                                    this.setState({
                                       selectedTab: controller.title
                                    })
                                }}
                            >
                                <Component navigator={this.props.navigator} {...this.props}/>
                            </FontAwesome.TabBarItem>
                        )
                    })
                }
            </TabBarIOS>
        )
    }
}