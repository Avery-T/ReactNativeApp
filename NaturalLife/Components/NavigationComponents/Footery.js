import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, withNavigation  } from "react-navigation";
import AppContainer from "../../App.js"
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
class FooterNav extends Component {
  render() {
    return (
     

        
        <Footer>
          <FooterTab>
          
            <Button vertical onPress={() =>  this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              
            </Button>
            <Button vertical onPress ={() => this.props.navigation.openDrawer()} >
              <Icon name="apps" />
              
            </Button>
           
          </FooterTab>
        </Footer>
     
    );
  }
}
export default withNavigation(FooterNav);