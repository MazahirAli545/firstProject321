import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, ButtTouchableHighlight, VirtualizedList, View, _View, ScrollView, Animated, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { styles } from './App';
import logoImg from './src/assets/image/otpImage.png'
import footerImg from './src/assets/image/shape.png'
import profileImg from './src1/image/profile.png'


export const App = () => {
  
  const press = (val)=> {
    console.warn(val);
  }


  return (

    <View style={Styles.container}>
      <View style={Styles.card1}>
        <Text style={Styles.contentText1}>Profile</Text>
      </View>

      <View style={[{flex:1}]}>
      <ScrollView> 
      <View style={Styles.card2}>
        <Image source={profileImg} style={{ height: 250, width: 200, alignSelf: "center", borderRadius: 400 / 2 }} />
      </View>

      <View style = {Styles.data}>
        <Text
          style={Styles.inputLabel}>
          UserName
        </Text>
        <TextInput style={Styles.inputDetails} />
        </View>

        <View style = {Styles.data}>
        <Text
          style={Styles.inputLabel}>
          Email
        </Text>
        <TextInput style={Styles.inputDetails} />
        </View>



        <View style = {Styles.data}>
        <Text
          style={Styles.inputLabel}>
          Mobile
        </Text>
        <TextInput style={Styles.inputDetails} />
        </View>



        <View style = {Styles.data}>
        <Text
          style={Styles.inputLabel}>
          Date Of Birth
        </Text>
        <TextInput style={Styles.inputDetails} />
        </View>


        <TouchableOpacity style={Styles.Buttoncard}>
          <Text style= {Styles.buttonDesign}onPress={()=>press("Your Profile will be edited")}>Edit Profile </Text>
           </TouchableOpacity> 
        </ScrollView> 
      </View>
    </View>


  )
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
  },

  card1: {
    borderWidth: 1,
    margin: 5,
    height: 50,
    borderRadius: 8
  },

  contentText1: {
    textAlign: "center",
    fontSize: 35,
    backgroundColor: "#696969",
    fontStyle: "italic",
    fontWeight: "800",
  },

  card2: {
    textAlign: "center",
    margin: 30,



  },

  Details: {
    marginTop: 120,
    marginLeft: 10,
    height: 30,
    width: 370,
    justifyContent: "center",
    textAlign: "center",





  },

  data: {
  height: 50,
  width: 350,
  justifyContent: "center",
  margin: 20
  },

  inputLabel: {
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic"

  },

  inputDetails: {
    borderWidth: 2,
    margin: 0,
    padding: 0,
    fontSize: 18,
    borderRadius: 8,
    fontWeight: "500",
    textAlign: "left",
    paddingLeft: 5,
    letterSpacing: 1,
    height: 30


  },

  Button: {
    borderWidth: 2,
    
    
  },

  Buttoncard: {
    
    
    margin: 40,
    width: 200,
    height: 200,
    marginVertical:20,
    paddingLeft: 40,
    
  },
   
  buttonDesign:{
    borderWidth: 2,
    paddingLeft: 36,
    paddingTop: 7,
    margin: 20,
    fontSize: 22,
    height: 45,
    width: 180,
    borderRadius: 10,
    backgroundColor: "grey",
    fontStyle: "italic",
    color: "black"
    
  }



  /*} headerText: {
     fontWeight: 'bold',
     color: '#333',
     fontSize: 40,
     letterSpacing: 1,
     backgroundColor: "#000000",
     textAlign: "center",
     padding: 30,
 
 
 
   },
   scrollview: {
     textAlign: "center",
     fontsize: 20,
     paddingVertical: 10,
     margin: 10,
 
 
   },
 
   contentText: {
     fontWeight: "bold",
     borderWidth: 0,
     backgroundColor: "#C5C5C5",
     padding: 20,
     borderRadius: 2,
     textAlign: "center",
     fontSize: 20,
     margin: 10
   },
 
   footerText: {
     fontSize: 40,
     borderWidth: 0,
     padding: 20,
 
   },
   footerText2: {
     fontSize: 40,
     borderWidth: 0,
     padding: 20,
     color: '#333',
     borderWidth: 1,
     backgroundColor: "blue",
     color: "black"
   }
 
 */

});

export default App