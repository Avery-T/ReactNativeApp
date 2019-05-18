import React from 'react';


import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { StyleSheet, Image, View, Dimensions, Text,ImageBackground, ScrollView } from 'react-native';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'NavBar',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/1.png')}
        
      />

    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />

    );
  }
}
