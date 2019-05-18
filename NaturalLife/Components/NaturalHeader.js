import React from 'react';
import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import {Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';
import { withNavigation } from 'react-navigation';


class HeaderTitle extends React.Component {

render() {
	

    return (
	<Header>
          <Left>
            <Button transparent onPress={() =>  this.props.navigation.openDrawer()}>
              <Icon name='menu' style = {{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          
        </Header>
   );
  }
}
export default withNavigation(HeaderTitle);