import React from 'react';
import { StyleSheet, Image, View, Dimensions,ImageBackground, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import YouTube from 'react-native-youtube';
import FooterNav from './Footery.js';
import  { TouchableOpacity}  from 'react-native'
import { Thumbnail } from 'react-native-thumbnail-video';
import HeaderTitle from '../NaturalHeader.js';


const styles = StyleSheet.create
({

  thumbNail: 
  {
    alignSelf: 'stretch', 
    height: 300,

  },

})
export default class you extends React.Component {
	constructor(props) {
        super(props);
        this.state = {VideoLoad: false, VideoLoad2: false};
    }
     static navigationOptions = {
      header: <HeaderTitle/>,
      };

    
     onPress = () => {
    
    this.setState({
      VideoLoad: true,VideoLoad2: false
    })
  }
  oPress = () => {
    this.setState({
      VideoLoad2: true, VideoLoad:false
    })
  }
  
 
  //function to load the youtbe video, if its not pressed then it displays its thumbnail 
  renderElement(){
   if(this.state.VideoLoad == true)

    
      return(
  	  	<YouTube
    playlistId="PLszTsaoIz1ri5vhCe1jf3blCUU9iTNBmk"   
    apiKey="AIzaSyA-HGlGteBfzaQlQowZDdGV2XlO1fk7Sxw"
    play={true}            
   

  style={styles.thumbNail}
		/>

      )
   else
   	return(
   	<Thumbnail url =  "https://www.youtube.com/watch?v=0qWbrn1QnJo&t=2s" style= {styles.thumbNail} onPress={this.onPress} />

   	)
   
}
enderElement(){

   if(this.state.VideoLoad2 == true )

      return(
  	  	<YouTube
  videoId="Im69kzhpR3I"   
  apiKey="AIzaSyA-HGlGteBfzaQlQowZDdGV2XlO1fk7Sxw"
  play={true}            
  

  style={styles.thumbNail}
		/>

      )
   else
   	return(
   	 
  	  <Thumbnail url =  "url= https://www.youtube.com/watch?v=d1DWOl1REwQ" style= {styles.thumbNail} onPress={this.oPress} />

   	)
   
}
  render() {
  
    return (



    <Container style =  {{alignSelf: 'center', width: 500}}>
   
    	{this.renderElement()}
    	
   		
  		    	

   
    </Container>
  
     
    );
  }
}
