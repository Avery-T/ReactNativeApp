import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import HomeScreen from './Components/HomeScreen.js'; 
import WebsiteComponent from './Components/NavigationComponents/WebsiteComponent.js';
import NavBar from './NavBar.js'; 
import footery from './Components/NavigationComponents/Footery.js'
import HealthBlogComponent from './Components/NavigationComponents/HealthBlog.js'
class DrawerMenu extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        
      <Text> Hey  wajats u </Text>
      </View>
    );
  }
}

 

const AppNavigator = createDrawerNavigator(
{
	
  
   Home: HomeScreen,    

   Website: WebsiteComponent,
   HealthBlog: HealthBlogComponent,
   WorkShops: NavBar,
   PodCasts:NavBar,
   Schedule: NavBar, 


 //{
   // contentComponent: DrawerMenu,
 });

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {


    return <AppContainer /> 
  }
} 