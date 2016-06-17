import  React from  'react';
import {View, TouchableOpacity, Text, Image, ScrollView, StyleSheet} from 'react-native';


export default class ScrollList extends React.Component {
    constructor(props) {
        super(props);
    }

    componetDidMount() {
        console.log('滚动列表开始');
    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }}
                    scrollEventThrottle={200}
                    style={styles.scrollView}>
                    {THUMBS.map(createThumbRow)}
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => { _scrollView.scrollTo({y: 0}); }}>
                    <Text>Scroll to top</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class Thumb extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <View style={styles.button}>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}

var THUMBS = [
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
    '搞工业4.0，离不开对数据灵魂的把握  发布日期：2015-12-01 00:00   大数据时代，国家竞争力体现为一国拥有数据的规模、质量，以及运用数据的能力。大数据正在人们的经济生活中扮演越来越重要的角色。在“十三五”规划建议中也明确提出，实施国家大数据战略，推进数据资源开放共享。',
];

THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (text, i) => <Thumb key={i} text={text}/>;
var styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
    },
    horizontalScrollView: {
        height: 120,
    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#527FE4',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#888888',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 64,
        height: 64,
    }
});