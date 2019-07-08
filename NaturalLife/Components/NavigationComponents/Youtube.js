import React from 'react';
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header,  Footer, FooterTab, Button, Icon, Text, Content } from 'native-base';

import FooterNav from './Footery.js';
import  { TouchableOpacity}  from 'react-native'
import { Thumbnail } from 'react-native-thumbnail-video';
import HeaderTitle from '../NaturalHeader.js';

const styles = StyleSheet.create
({

  thumbNail: 
  {

    alignSelf: 'stretch', 
    height: 300,

  },

})
//make onpress navigate to a page showing a youtube video in full screen 
export default class you extends React.Component {
	constructor(props) {
        super(props);
        this.state = {VideoLoad: false, VideoLoad2: false};
    }
     static navigationOptions = {
      header: <HeaderTitle/>,
      };

  
 



  render() {
  
    return (
  <Content>
  <HeaderTitle/>
  
  <View>
    
               // control playback of video with true/false
         // control whether the video should play in fullscreen or inline
            // control whether the video should loop when ended
  />

 </View>
  </Content>
 
   		
  		    	

  
   

     
    );
  }
}
