import React from 'react'
import { createStackNavigator, createAppContainer,withNavigation } from "react-navigation";

import  { TouchableOpacity}  from 'react-native'
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
const styles = StyleSheet.create(
{

  SmallImages:
  {
    height: 125,
    width: 158,
    marginTop: 25, 
    marginRight:10,
  },

  SmallImageView1:
  {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardStyle:
  {
  	flex: 0, 
  	marginTop:25, 
  	marginRight:10,

  },
  CardText:
 {
 	marginTop:8, 
 	marginBottom:10, 
 	padding: 10,
 	fontWeight: 'bold',

 },

});

class Scrolly extends React.Component{	
	render(){
		return(
       		<ScrollView horizontal = {true} style = {{width: Dimensions.get('window').width}}>
       			<View style = {styles.SmallImageView1}>
        <Container>
        <Content>
        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('HealthBlog')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody>
              <Body>
                <Image source={{uri: 'https://sommersholistichealth.com/wp-content/uploads/2018/12/acupuncture.jpg'}} style={{height: 125, width: 158, flex: 1, borderWidth:3, borderColor:'white'}}/>
                <Text style = {styles.CardText}>
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
       <TouchableOpacity onPress={() =>  this.props.navigation.navigate('HealthBlog')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody>
              <Body>
                <Image source={{uri: 'https://sommersholistichealth.com/wp-content/uploads/2019/02/home-page-slider_scott1_resized.jpg'}} style={{height: 125, width: 158, flex: 1, borderWidth:3, borderColor:'white'}}/>
                <Text style = {styles.CardText}>
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
          <TouchableOpacity onPress={() =>  this.props.navigation.navigate('HealthBlog')}> 

          <Card style={styles.CardStyle}>
            <CardItem  cardBody>
              <Body>
                <Image source={{uri: 'https://blog.algolia.com/wp-content/uploads/2016/04/podcast.png'}} style={{height: 125, width: 158, flex: 1, borderWidth:3, borderColor:'white'}}/>
                <Text style = {styles.CardText}>
                      PodCasts
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