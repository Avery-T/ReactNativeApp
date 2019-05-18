import React from 'react';


import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { StyleSheet, Image, View, Dimensions, Text,ImageBackground, ScrollView } from 'react-native';

export default class Navbar extends React.Component {
  
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />

    );
  }
}

