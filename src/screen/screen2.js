import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, VirtualizedList, View, _View, ScrollView, } from 'react-native';
import { styles } from './ScreenNavigation';
import logoImg from '../assets/image/otpImage.png'
import footerImg from '../assets/image/shape.png'
import rightaroowImg from '../assets/image/ic_rightArrow.png';


 export const App = ({navigation, route}) => {

  const {name} = route.params;

  return (

    <View style={{ flex: 1, backgroundColor: "white"}}>
    
      <View style={Styles.logoDesign}>
      <Image source={logoImg} style={{ height: 250, width: 280,   }} />
      </View>
  
       <Text style={Styles.imgText1}>Hello Again!</Text>


      <View style={Styles.imgText2}>
        <Text style={Styles.imgText3}>Please enter your OTP</Text>
        <Text style={Styles.imgText4}>Sent on +91 {name}  </Text>

      </View>



       <View style = {Styles.inputStyle2}>
       <View style={Styles.inputStyle1}>
        <TextInput 
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        maxLength={1}
        textAlign='center'
        />
        </View> 
      
      <View style={Styles.inputStyle1}>
      <TextInput 
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        maxLength={1}
        textAlign='center'
        />
      </View>

      <View style={Styles.inputStyle1}>
      <TextInput 
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        maxLength={1}
        textAlign='center'
        />
      </View>

      <View style={Styles.inputStyle1}>
      <TextInput 
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        maxLength={1}
        textAlign='center'
        />
      </View>
      </View>
       

      <View style={Styles.imgText5}>
      <Text style={Styles.imgText6}>Resend </Text>
      <Text style={Styles.imgText7}>OTP in 22 sec</Text>
      </View>
       
      <Image source={footerImg} style={{ height: "100%", width: "100%" , marginTop: -240  }} />
      
      <View style={Styles.buttonposition}>
        

        
        
        <TouchableHighlight style={Styles.buttonposition1}>
          <Text style={Styles.button} onPress={() => navigation.navigate("PersonalDetails")} >Next
          <Image source={rightaroowImg} style={{height: 20, width: 25}}/> 
          </Text>
        </TouchableHighlight>
        
        <View style= {Styles.imgText8}>
          <Text style={Styles.imgText9}>Login with PIN</Text>
        </View>
        
        </View>
 
       
    

      
  

    </View>



  );
};


const Styles = StyleSheet.create({

 

  logoDesign:{
   paddingLeft: 45,
   paddingTop: -10
  },
  imgText1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    color: "black",
    paddingLeft: 5,
    paddingTop: 2,
    marginTop: 20,


  },
  imgText3: {
    fontSize: 25,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#A9A9A9",
    paddingLeft: 50,
    paddingTop: 15,
    



  },
  imgText2: {
    textAlign: 'center',
    letterSpacing: 6,
    paddingHorizontal: '1',
    marginTop: -10
    

  },

  imgText4: {
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#A9A9A9",
    paddingLeft: 65,
  

  },
  inputStyle1: {
    
    elevation: 5,
    backgroundColor: "white",
    marginTop: 30,
    textAlign: "center",
    
    height: 40,
    width: 55,
    color: "#151414",
    
    borderRadius: 8,
    marginHorizontal: 7,
    

  },

  inputStyle2: {
    flexDirection: "row",
    paddingLeft: 55,
    paddingTop: 2,
    marginTop: -20,
    zIndex: 1

  },

  inputStyle3: {
    textAlign: "right",
    color: "#151414",
    
    

  },

  inputStyle4: {
    
    padding: 5,
    paddingLeft: 10,
    letterSpacing: 1,
    color: "#36454F",
    height: 35,
    width: 250,
    lineHeight: 10,
    borderWidth: 5,
    borderRadius: 5,
    marginTop: 670,
    marginRight: 35,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute"


  },
  imgText5:{
    padding: 20,
    paddingLeft: 110,
    paddingTop: 25,
    flexDirection: "row",
    
    
  },

  imgText6:{
    fontStyle: "normal",
    color: "grey",
    fontWeight: "700",
    fontSize: 17
  },

  imgText7:{
    fontStyle: "normal",
    color: "grey",
    fontSize: 17
  },

  button: {
    height: 35,
    width: 190,
    
    borderRadius: 12,
    textAlign: "center",
    backgroundColor: "grey",
    color: "black",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    paddingLeft: 10,
    paddingTop: 3
    
  },
  buttonposition: {
    position: "absolute",
    textAlign: "center",
    margin: 30,
    paddingRight: 60,
    paddingTop: 10,
    paddingLeft: 70
    
  
  },

  buttonposition1:{
   paddingTop: 590,
   textAlign: "center",
   paddingRight: "300",
   paddingRight: 30,
  },

  imgText8: {
    marginTop: 10,
    marginLeft: 15,
    
    paddingLeft: 15,
    
    
  },

  imgText9: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  }




  /*Header: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  inputcontainer: {
    marginTop: 20,
  },
  inputLabel: {
   fontSize: 18,
   color: "#7d7d7d",
   marginTop: 10,
   marginTop: 10,
   lineHeight:25,
   fontFamily: "regular",
  },
  inputStyle: {
    fontSize: 18,
   color: "#7d7d7d",
   marginTop: 10,
   marginTop: 10,
   lineHeight:25,
   fontFamily: "regular",
   borderWidth: 1
  } */

});

export default App;