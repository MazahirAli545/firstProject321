import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  VirtualizedList,
  View,
  _View,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './ScreenNavigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Companylogo from '../assets/image/companyImage.png';

export const Splash = ({navigation}) => {
   
    useEffect(() => {
     setTimeout(()=> {
      console.log('hii');
      navigation.navigate('Home')
     }, 1000)
    },[]);
  
    return (
       
        <View style={{backgroundColor:"white",flex: 1}}>
        
      <Animatable.Image source={Companylogo} style={{height:120, backgroundColor: "white", width:280,marginLeft: 30, marginTop: 280}} 
          duration={2000}
          animation = "fadeInDownBig"/>
          </View>
       
      );
    };
    
    const Styles = StyleSheet.create({
      
     
    });
    
    export default Splash;
    







 