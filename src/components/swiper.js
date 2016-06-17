import  React from 'react';
import {View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Loading from '../components/loading';
import Swiper from 'react-native-swiper';

const images = [
    {
        key: 'http://120.27.108.168/demohtml/app/images/banner1.jpg',
        name: 'one',
        link: 'detail'
    },
    {
        key: 'http://120.27.108.168/demohtml/app/images/banner2.jpg',
        name: 'two',
        link: 'about'
    },
    {key: 'http://120.27.108.168/demohtml/app/images/banner3.jpg', name: 'three'}
];

export  default class SwiperImage extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataSource: null
        }
    }

    componentDidMount() {
        console.log('swiper 开始啦');
        this.fetchData();
    }

    fetchData() {
        if (images) {
            this.setState({
                loading: true,
                dataSource: images
            });
        }
    }

    render() {
        if (!this.state.loading)
            return (
                <Loading />
            );
        const bannerList = this.state.dataSource;
        // const bannerList = images;
        return (
            <View style={{height:140,width:600,backgroundColor:'white',flex:1}}>
                <Swiper
                    height={140}
                    loop={true}
                    autoplay={true}
                    dot={<View style={styles.customDot} />}
                    activeDot={<View style={styles.customActiveDot} />}
                    paginationStyle={{
                        bottom: 10
                    }}
                    showsButtons={true}
                >
                    {bannerList.map((banner) => {
                        if (banner.link)
                            return (
                                <TouchableOpacity key={banner.name}
                                                  onPress={()=>this.context.router.push('/'+banner.link)}
                                                  activeOpacity={0.75}>
                                    <Image
                                        style={styles.bannerImage}
                                        resizeMode="contain"
                                        source={{uri: banner.key}}
                                    />
                                </TouchableOpacity>
                            );
                        else
                            return (
                                <TouchableOpacity key={banner.name}
                                                  activeOpacity={0.75}>
                                    <Image
                                        style={styles.bannerImage}
                                        resizeMode="contain"
                                        source={{uri: banner.key}}
                                    />
                                </TouchableOpacity>
                            );
                    })}
                </Swiper>
            </View>
        )
    }
}
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
    bannerImage: {
        height: 150,
        width: window.width,
    },

    customDot: {
        backgroundColor: '#ccc',
        height: 1,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        borderColor: '#333',
        borderWidth: 0.5,
    },

    customActiveDot: {
        backgroundColor: 'yellow',
        height: 3,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },

});