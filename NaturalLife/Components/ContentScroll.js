import React from 'react'
import { createStackNavigator, createAppContainer,withNavigation } from "react-navigation";
import {Youtube} from 'react-native-openanything';
import  { TouchableOpacity, Text }  from 'react-native'
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

const styles = StyleSheet.create(
{

  images:
  {
    height: Dimensions.get('window').height/5.5, 
    width: Dimensions.get('window').width/2.5,
    flex: 1, 
  
    
    borderColor:'white',
   
  },

  SmallImageView1:
  {
    flex: 2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardStyle:
  {
  	flex: 0, 
  	marginTop:Dimensions.get('window').height/35,
  	marginRight:10,
    

  },
  CardText:
 {
 	marginTop:8, 
 	marginBottom:10, 
 	padding: 0.013*Dimensions.get('window').height,
  fontSize: 0.035* Dimensions.get('window').width, 


 	fontWeight: 'bold',
  color:'black',
 },


});


class Scrolly extends React.Component{	

	render(){

		return(
        
       		
          <ScrollView horizontal = {true} style = {{width: Dimensions.get('window').width, height: '100%'}}   >
         
       			<View style = {styles.SmallImageView1}>
        
        
        <Container>
        <Content>
        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('HealthBlog')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody>
              <Body>
                <Image source= {require('../HomeImages/ContentScroll/blog.jpg')} style ={styles.images}/>
                <Text style = {styles.CardText} allowFontScaling={false}>
                      Health Blog
                </Text>
              </Body>
            </CardItem> 

          </Card>
           </TouchableOpacity>

        </Content>
      </Container>
      <Container>
        <Content>
       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('WorkShops')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody>
              <Body>
                <Image source={require('../HomeImages/ContentScroll/workshop.jpg')}style ={styles.images}/>
                <Text style = {styles.CardText} allowFontScaling={false} >
                      WorkShops
                </Text>
              </Body>
            </CardItem>
          </Card>
            </TouchableOpacity>
        </Content>
      </Container>
      <Container>
        <Content>
          <TouchableOpacity onPress={() => Youtube('d1DWOl1REwQ')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody style  = {{marginRight:15}}>
              <Body >
                <Image source={require('../HomeImages/ContentScroll/youtube.png')} style = {styles.images}/>
                <Text style = {styles.CardText} allowFontScaling={false}>
                     Youtube
                </Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
      </Container>
       



    

       			</View>
      		</ScrollView>
        
     
		);
	}
}
export default withNavigation(Scrolly);