import React from 'react';
import { View, Text,ScrollView,SafeAreaView,StyleSheet,Image } from "react-native";

import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import {Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';
import { withNavigation } from 'react-navigation';


class HeaderTitle extends React.Component {

render() {
	

    return (
	<Header style = {{backgroundColor: 'white'}}>
       

          <Left>
          <View style = {{justifyContent: 'space-evenly'}}>
            <Button transparent onPress={() =>  this.props.navigation.openDrawer()}>
                  

              <Icon name='menu' style = {{color: 'black'}} />
              <Image source={require('../HomeImages/logo.jpg')} style = {{ width:35, height:35 }}/>
               </Button>
              </View> 
           
          </Left>
          <Left>
          
          </Left> 
          <Body>
            <Title></Title>
          </Body>
         
        </Header>
         
   );
  }
}
export default withNavigation(HeaderTitle);