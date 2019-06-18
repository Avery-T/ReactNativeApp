import React from 'react';
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import FooterNav from './Footery.js';
export default class Youtube extends React.Component {
  render() {
   
    return (
    <Container>
    
  
       <WebView
      source={{uri: 'https://www.instagram.com/sommers_holistic_health/'}} />
      <FooterNav/>

    </Container>
     
    );
  }
}
