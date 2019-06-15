import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, withNavigation  } from "react-navigation";
import AppContainer from "../../App.js"
import StyleSheet from "react-native"; 
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
class FooterNav extends Component {
  render() {
    return (
     

        
        <Footer style ={{backgroundColor:'white'}}>
          <FooterTab>
            <Button vertical onPress ={() => this.props.navigation.openDrawer()} >
              <Icon name="apps"/>
              
            </Button>
            <Button vertical onPress={() =>  this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              
            </Button>
        
           
          </FooterTab>
        </Footer>
     
    );
  }
}
export default withNavigation(FooterNav);