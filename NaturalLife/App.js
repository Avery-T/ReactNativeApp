import React from "react";
import { View, Text,ScrollView,SafeAreaView,StyleSheet,Image,ImageBackground,TouchableOpacity, Platform,Dimensions} from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import {Youtube} from 'react-native-openanything';
import HomeScreen from './Components/HomeScreen.js'; 
import WebsiteComponent from './Components/NavigationComponents/WebsiteComponent.js';
import NavBar from './NavBar.js'; 
import footery from './Components/NavigationComponents/Footery.js'
import HealthBlogComponent from './Components/NavigationComponents/HealthBlog.js'
import FaceBook from './Components/NavigationComponents/FaceBook.js'
import Insta from './Components/NavigationComponents/Instagram.js'
import WorkShop from './Components/NavigationComponents/WorkShops.js'
import BuyMember from './Components/NavigationComponents/BuyMember.js'
const styless = StyleSheet.create({
  drawerView: 
   {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop:  0.05* Dimensions.get('window').width,   

    paddingLeft: 0.05* Dimensions.get('window').width,   
   },

  drawerText:
  {


    color:'black',
    fontSize:0.032* Dimensions.get('window').width, 

    fontWeight: 'bold',
    paddingTop:4,
    paddingLeft:0.075* Dimensions.get('window').width,
    justifyContent: 'flex-start'


  },
  ContactUs:
  {

    fontSize:13, 
    fontWeight: 'bold',
    paddingTop:4,
  
     justifyContent: 'flex-start'


  },
  viewIcon:
  {

    width: 0.06* Dimensions.get('window').width, 
  },
  iconSize:
  { 
    color:'dimgrey',
    fontSize:0.06* Dimensions.get('window').width, 
  },
  divider:
  {
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    opacity: .2

  },
  member:
  {
    flex:1,

    backgroundColor: 'red',
    opacity: .55,
    position: 'absolute',
    bottom:0,
    right:0,
    ///so it gets the width of the app drawer
    width:'72%',  
    borderTopLeftRadius: Dimensions.get('window').width *.025,

    borderBottomLeftRadius:Dimensions.get('window').width *.025,
    marginBottom: Dimensions.get('window').width *.03,

    height:Dimensions.get('window').width *.1,
   
  
  
  },
  memberText:
  {

    color: 'white',

    fontSize:0.046* Dimensions.get('window').width, 
    fontWeight: 'bold',
    position: 'absolute',
    bottom:0,
    right:0,
    marginBottom:Dimensions.get('window').width *.05,
    marginRight:Dimensions.get('window').height *.0065,
    fontFamily: "times",


  }, 
  image:
  {
      height: 0.23* Dimensions.get('window').height,
      width:'100%', 
      flex:1
  }




  });
const styles = StyleSheet.create({
  container: {
   
    flex: 1,
     
  },
});


class DrawerWow extends React.Component {
  render() {
    
    
    
    return (
     <ScrollView>
     
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <TouchableOpacity onPress={() =>  this.props.navigation.navigate('BecomeMember')}>

        
     <ImageBackground source= {require('./HomeImages/become.png')} style={styless.image}>
      <View style = {styless.member}>
     


      </View>
      <Text  style = {styless.memberText} allowFontScaling={false}> Become a Member </Text>


  
      </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Home')}>
      <View style={styless.drawerView}>

      <View style = {styless.viewIcon}>
      <Icon name="home" style = {styless.iconSize}/> 
      </View>

      <Text style = {styless.drawerText}  allowFontScaling={false}>Home</Text>
      </View>
      
      </TouchableOpacity>
       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Website')}>

      <View style={styless.drawerView}>
      <View style = {styless.viewIcon}>
      <Icon name="navigate" style = {styless.iconSize}/>
      </View>

      <Text style = {styless.drawerText} allowFontScaling={false}>Website</Text>
    
      </View> 

      </TouchableOpacity>
   
      <TouchableOpacity onPress={() =>  this.props.navigation.navigate('HealthBlog')}>

      <View style={styless.drawerView}>

      <View style = {styless.viewIcon}>
      <Icon name="paper" style = {styless.iconSize}/>
      </View>

      <Text style = {styless.drawerText}  allowFontScaling={false}>Health Blog</Text>
      </View> 
      </TouchableOpacity>

       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('WorkShops')}>
      <View style={styless.drawerView}>

      <View style = {styless.viewIcon}>
      <Icon name="film" style = {styless.iconSize}/> 
      </View>

      <Text style = {styless.drawerText} allowFontScaling={false}>WorkShops</Text>
      </View>
      
      </TouchableOpacity>

       <TouchableOpacity onPress={() => Youtube('d1DWOl1REwQ')}>
      <View style={styless.drawerView}>
      <View style = {styless.viewIcon}>
      <Icon name="logo-youtube" style = {styless.iconSize}/>
      </View>
      <Text style = {styless.drawerText} allowFontScaling={false} >Youtube Page</Text>
      </View> 
      </TouchableOpacity>

      <View style = {styless.divider}/>


       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Facebook')}>
      <View style={styless.drawerView}>
      <View style = {styless.viewIcon}>
      <Icon name="logo-facebook" style = {styless.iconSize}/>
      </View>
      <Text style = {styless.drawerText}  allowFontScaling={false}>Like our Facebook page</Text>
      </View> 
      </TouchableOpacity>

       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Instagram')}>
      <View style={styless.drawerView}>
      <View style = {styless.viewIcon}>
      <Icon name="logo-instagram" style = {styless.iconSize}/>
      </View>
      <Text style = {styless.drawerText} allowFontScaling={false}>Follow us on Instagram</Text>
      </View> 
      </TouchableOpacity>

      
    </SafeAreaView>
  </ScrollView>
    );
  }
}

 

const AppNavigator = createDrawerNavigator(
{
	
  
   Home: HomeScreen,    

   Website: WebsiteComponent,
   HealthBlog: HealthBlogComponent,
   WorkShops: WorkShop,
   PodCasts:NavBar,
   Schedule: NavBar, 
   Facebook: FaceBook,
   Instagram: Insta,
   BecomeMember: BuyMember,  

 },

  {
    contentComponent: DrawerWow,
    drawerWidth: Math.min(Dimensions.get('window').height,Dimensions.get('window').width) * 0.7,
  },
 );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  render() {

    return(
      
     <AppContainer />
    
     );

  }
} 