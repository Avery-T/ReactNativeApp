import React from 'react';
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';

import {Youtube} from 'react-native-openanything';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import FooterNav from './Footery.js';
export default class YouTube extends React.Component {
  render() {
   
    return (
      <Container>
        <Button onPress={() => Youtube('d1DWOl1REwQ')}>
          <Text>Text</Text>
        </Button>
      </Container>
      
    
     
    );
  }
}

