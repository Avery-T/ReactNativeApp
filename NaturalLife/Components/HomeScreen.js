import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { StyleSheet, Image, View, Dimensions, Text,ImageBackground, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail} from 'native-base';


import ContentScroll from './ContentScroll.js';
import HeaderTitle from './NaturalHeader.js';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
   ImageText: 
   {
  
    
     

    fontSize: 0.06* Dimensions.get('window').width, 


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
    height: Dimensions.get('window').height, 

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

 
    height: Dimensions.get('window').height/3, 
    flexDirection: 'row',
    justifyContent: 'center',


    width: Dimensions.get('window').width -50, 
    marginTop:Dimensions.get('window').height/35,
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

 	fontSize: 0.07* Dimensions.get('window').width, 
 	
 	marginTop: Dimensions.get('window').height/5.5,
  
 	fontFamily: "times",

 },

 screenAlign: 
 {
  flex:1,
  height: Dimensions.get('window').height,
 },


 imageButton:
 {  


          height:Dimensions.get('window').height/17, 
          width:Dimensions.get('window').width/2.75,
          borderWidth: 1, 
          borderRadius:4, 
          borderColor: 'white', 
          backgroundColor: 'white',
          position:'absolute',
          marginTop: Dimensions.get('window').height/5.5,
  

          
         


 },

  
});







export default class HomeScreen extends React.Component {
  static navigationOptions = {
      header: <HeaderTitle/>,
      };
    

   heightt = () => {
    if (Dimensions.get('window').height < 650)
    {
      return Dimensions.get('window').height +50;
      
    }
    else
    {
      return Dimensions.get('window').height;
    }
   }
  componentDidMount(){

    setTimeout(() => {
      SplashScreen.hide();},50);


  }

 
  render() {
    return (


     
       <ScrollView 
       contentContainerStyle  = {{flexGrow:1, height:this.heightt()}}> 

 
         <HeaderTitle/> 
       

      
      <Container style = {styles.ViewBorder}>
      
       <Text style = {styles.ImageText} allowFontScaling={false}>Welcome to Sommer's Holistic Health </Text>
        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Website')}> 
       <ImageBackground style = {styles.FirstImage} source={{uri: 'https://sommersholistichealth.com/wp-content/uploads/2019/02/scott-front-page-2-resized.png'}}>
        <View style = {styles.imageButton}/>
        <Text style = {styles.WebsiteBlockText} allowFontScaling={false}>
        Website
         </Text>
       </ImageBackground>

       </TouchableOpacity>
       
       <View style = {{marginTop:35}}> 

       <Text style = {styles.ImageText} allowFontScaling={false}> Learn </Text>
            
       <ContentScroll/>
      

      
       </View>
      
       </Container> 
       
 
      </ScrollView>
     
   
       


  
          
    );
  }
}
