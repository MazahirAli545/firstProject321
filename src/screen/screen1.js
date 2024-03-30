import React, { useState } from 'react';
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
import {styles} from './ScreenNavigation';
import logoImg from '../assets/image/mobile.png';
import footerImg from '../assets/image/shape.png';
import arrowImg from '../assets/image/ic_targetArrow.png';
import rightaroowImg from '../assets/image/ic_rightArrow.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const App = ({navigation}) => {
  const [name, setName] = useState("");

  const handleName = text => {
    setName(text);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

      <KeyboardAwareScrollView>
      <View style={Styles.logoDesign}>
        <Image source={logoImg} style={{height: 260, width: 270}} />
      </View>
      
      <View style={Styles.homeContainer}>
      

<View style={Styles.textContainer}>
<View style={Styles.imgText2}>
        <Text style={Styles.imgText3}>We want to know you!</Text>
        <Text style={Styles.imgText4}>Enter Your{'\n'}Mobile Number Here!</Text>
     

      <Image source={arrowImg}
      style={{
       
        height: 160,
        width: 100,
        marginTop: 90,
        marginLeft: 250,
       
       position: "absolute"
      
      }}/>
      <Image
        source={footerImg}
        style={{
          height: 290,
          width: 400,
          
          position: "relative"
        }}
      />

      </View>

<View style = {Styles.inputTextDesign}> 
      <TextInput
         placeholder="Enter Mobile No."
         placeholderTextColor="#888"
         keyboardType="phone-pad"
         maxLength={10}
        value={name}
        onChangeText={handleName}
        style={Styles.inputText12}
      />
        </View> 

       <View style={Styles.buttonposition}>
        <TouchableHighlight style={Styles.buttonposition1}>
          <Text
            style={Styles.button}
            onPress={() =>
              navigation.navigate('HomeScreen2', {name: name})
            }>
            Next<Image source={rightaroowImg} style={{height: 15, width: 20}}/> 
          </Text>
          
        </TouchableHighlight>
      </View>
     
       
</View>


  </View>
      {/* <View style={Styles.imgText2}>
        <Text style={Styles.imgText3}>We want to know you!</Text>
        <Text style={Styles.imgText4}>Enter Your{'\n'}Mobile Number Here!</Text>
      </View> */}




      {/* <View style={Styles.imgText2}>
        <Text style={Styles.imgText3}>We want to know you!</Text>
        <Text style={Styles.imgText4}>Enter Your{'\n'}Mobile Number Here!</Text>
      </View> */}

      {/* <Image source={arrowImg}
      style={{
        position:"absolute",
        height: 160,
        width: 100,
        marginTop: 400,
        marginLeft: 230,
        

      }}/> */}

      {/* <Image
        source={footerImg}
        style={{
          height: 230,
          width: 400,
          justifyContent: 'flex-end',
          marginVertical: 70,
          position: "relative"
        }}
      /> */}

</KeyboardAwareScrollView>

       {/* <View style = {Styles.inputTextDesign}> 
      <TextInput
        placeholder="enter the number"
        value={name}
        onChangeText={handleName}
        style={Styles.inputText12}
      />
       </View> 
      
      */}

      {/* <View style={Styles.buttonposition}>
        <TouchableHighlight style={Styles.buttonposition1}>
          <Text
            style={Styles.button}
            onPress={() =>
              navigation.navigate('HomeScreen2', {name: name})
            }>
            Next<Image source={rightaroowImg} style={{height: 1, width: 3}}/> 
          </Text>
          
        </TouchableHighlight>
      </View> */}

      

     
    </View>
  );
};

const Styles = StyleSheet.create({
  
  textContainer:{
    flex: 1,
    
    justifyContent: 'center',
    marginTop: 40,
    
  },

  homeContainer:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputText12: {
    zIndex: 1,
    paddingVertical: 2,
    backgroundColor: '#fff',
    
    letterSpacing: 0,
    fontSize: 18,
    marginTop:  -110,
    marginHorizontal: 60,
    paddingLeft: 5,
   
    borderRadius: 6,
    
  },

  // inputTextDesign: {
  //   backgroundColor: 'white',
  //   marginHorizontal: 20,
    
  // },

  logoDesign: {
    paddingLeft: 50,
    
    resizeMode: "contain"
  },
  imgText1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    paddingLeft: 5,
    paddingTop: 12,
  },
  imgText3: {
    alignItems: "center",
    fontSize: 23,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#808080',
    paddingLeft: 110,
  
    
  
  },
  imgText2: {
    textAlign: 'center',
    letterSpacing: 6,
    paddingHorizontal: '1',
  },

  imgText4: {
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'black',
    paddingLeft: 115,
    marginTop: 30,
    alignItems: "center"
    
  },

  inputStyle: {
    padding: 1,
    paddingLeft: 10,
    letterSpacing: 1,
    color: '#36454F',
    height: 35,
    width: 40,
    lineHeight: 10,
    borderWidth: 4,
    borderRadius: 5,
    marginTop: 600,
    marginRight: 35,
    shadowRadius: 50,

    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    shadowColor: '#151414',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  inputStyle1: {
    marginTop: 30,
    textAlign: 'center',
    height: 40,
    width: 55,
    color: '#151414',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 7,
  },

  inputStyle2: {
    flexDirection: 'row',
    paddingLeft: 55,
    paddingTop: 2,
  },

  inputStyle3: {
    textAlign: 'right',
    color: '#151414',
  },

  inputStyle4: {
    padding: 5,
    paddingLeft: 10,
    letterSpacing: 1,
    color: '#36454F',
    height: 35,
    width: 250,
    lineHeight: 10,
    borderWidth: 5,
    borderRadius: 5,
    marginTop: 670,
    marginRight: 35,
    backgroundColor: '#ffffff',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    position: 'absolute',
  },
  imgText5: {
    padding: 20,
    paddingLeft: 110,
    paddingTop: 25,
    flexDirection: 'row',
  },

  imgText6: {
    fontStyle: 'normal',
    color: 'grey',
    fontWeight: '700',
    fontSize: 17,
  },

  imgText7: {
    fontStyle: 'normal',
    color: 'grey',
    fontSize: 17,
  },

  button: {
    height: 30,
    width: 100,

    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#FFD700',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',

    
    paddingTop: 1,
  },
  buttonposition: {
    marginTop: -60,
    marginLeft: 230,
    textAlign: 'center',
    margin: 30,
   zIndex: 1,
    paddingRight: 60,
    paddingTop: 0,
 
  },

  buttonposition1: {
    
    textAlign: 'center',
    position: "relative",
    paddingRight: 30,
    
   
  },

  imgText8: {
    margin: 20,
    marginRight: 20,
    paddingBottom: 5,
    paddingLeft: 15,
  },

  imgText9: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },

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
