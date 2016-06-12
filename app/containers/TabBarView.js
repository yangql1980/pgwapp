/**
 * Created by ljunb on 16/5/26.
 */
import React from 'react';
import {
    TabBarIOS,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StrollingContainer from '../containers/StrollingContainer';
import FoodsContainer from '../containers/FoodsContainer';
import UserContainer from '../containers/UserContainer';
import Constants from '../common/constants';

const tabBarItems = [
    {title: '首页', icon: 'shopping-basket', component: StrollingContainer},
    {title: '我要接单', icon: 'book', component: StrollingContainer},
    {title: '我要发布', icon: 'user', component: StrollingContainer},
    {title: '会员中心', icon: 'user', component: UserContainer},
]

export default class TabBarView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }

    render() {
        
        return (
            <TabBarIOS tintColor={Constants.colors.themeColor}>
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
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </FontAwesome.TabBarItem>
                        )
                    })
                }
            </TabBarIOS>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})