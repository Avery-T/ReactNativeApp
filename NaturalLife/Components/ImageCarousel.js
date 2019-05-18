import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
const BannerWidth = Dimensions.get('window').width; // use -30 for a border 
const BannerHeight = 200;
 
const images = [
    "https://sommersholistichealth.com/wp-content/uploads/2019/02/scott-front-page-1-resized.png",
    "https://sommersholistichealth.com/wp-content/uploads/2019/02/scott-front-page-2-resized.png",
  
];
 
export default class MyCarousel extends React.Component {
    renderPage(image, index) {
        return (
             
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
 
    render() {
        return (

            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={50000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {


        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});
