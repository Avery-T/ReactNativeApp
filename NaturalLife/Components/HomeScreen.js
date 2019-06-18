import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { StyleSheet, Image, View, Dimensions, Text,ImageBackground, ScrollView, TouchableOpacity, } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';


import ContentScroll from './ContentScroll.js';
import HeaderTitle from './NaturalHeader.js';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
   ImageText: 
   {
    fontSize: 25,
    //borderRadius: 3,  
    //borderWidth: 3, 
   // borderColor: 'white',
    color: 'black', 

    fontWeight: 'bold',
   
    borderColor: 'white',
        
  },

  ViewBorder: 
  {
   marginTop:2,
    flex:1,

    borderWidth: 25, 
    
    borderColor: 'white', 
  },

  FirstBorder:
  {
    flex:1,
    borderColor: 'white',
    borderLeftWidth: 13,
    borderBottomWidth: 13, 
   
  },
  FirstImage:
  {

  
    height: 225,

    width: Dimensions.get('window').width -50, 
    marginTop: 20, 
    //makes the boder work on all sides
    overflow: 'hidden',
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: 'white',



  },

  
  
  SmallBorders:
  {
    flex:1,
    borderLeftWidth: 13,   
    borderBottomWidth: 13,
    borderColor: 'white',
  },
  
  
  ImageColor: 
  {
    flex:1,
    backgroundColor: 'rgba(0,0,32,.4)',  

  },
  smallImageContainer:
  {
    flex: 1,
    flexDirection: "column",
   
   
  }, 

 WebsiteBlockText:
 {
 	fontSize: 30, 
 	textAlign: "center", 
 	textAlignVertical: "center",
 	marginTop: 140,
 	fontFamily: "times",

 },

  
});




export default class HomeScreen extends React.Component {
  static navigationOptions = {
      header: <HeaderTitle/>,
      };
  componentDidMount(){

    setTimeout(() => {
      SplashScreen.hide();},50);


  }
 
  render() {
    return (


        <Container>

        <Content>
         <HeaderTitle/> 

      
      <Container style = {styles.ViewBorder}>
      
       <Text style = {styles.ImageText}>Welcome to the Natural Life Center </Text>
        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Website')}> 
       <ImageBackground style = {styles.FirstImage} source={{uri: 'https://sommersholistichealth.com/wp-content/uploads/2019/02/scott-front-page-2-resized.png'}}>

      	<View style = {{flex:1, height:40, width:150, borderWidth: 1, borderRadius:4, borderColor: 'white', backgroundColor: 'white',position:'absolute', marginTop: styles.FirstImage.height/2 - styles.FirstImage.marginTop+45, marginHorizontal: styles.FirstImage.width/2 - 75}}/>
        <Text style = {styles.WebsiteBlockText}>
        Website
         </Text>
       </ImageBackground>

       </TouchableOpacity>
       
       <View style = {{marginTop:35}}> 

       <Text style = {styles.ImageText}> Learn </Text>

       <ContentScroll/>

      
       </View>
      
       </Container> 
       
      </Content>
      </Container>
       


  
          
    );
  }
}
