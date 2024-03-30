import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, VirtualizedList, View, _View, ScrollView, } from 'react-native';
import { styles } from './ScreenNavigation';
import topImg from '../assets/personal_detail/top_shape.png'
import BottomImg from '../assets/personal_detail/bottom_shape.png'
import forwardImg from '../assets/image/forward.png';
import backwardImg from '../assets/image/back.png';


 const  App = ({navigation}) => {



  return (

    <View style={{ flex: 1, backgroundColor: "white"}}>
      <ScrollView>
      <View style={Styles.logoDesign}>
          <Image source={topImg} style={{ height: 200, width: 200, }} />
        </View>
        <Text style={Styles.imgText1}>Personal Details</Text>

         
        <View style={Styles.imgText2}>
        <View style={Styles.labelDesign}>
          <Text style={Styles.imgText3}>Name</Text>
          </View>
          <TextInput style={Styles.imgText4} placeholder='please enter your name'/>

         
          <View style={Styles.labelDesign}>
          <Text style={Styles.imgText3}>Gender</Text>
          </View>
          <TextInput style={Styles.imgText4} placeholder='please choose your gender'/>


          <View style={Styles.labelDesign}>
          <Text style={Styles.imgText3}>DOB</Text>
          </View>
          <TextInput style={Styles.imgText4} placeholder='DD  /  MM  /  YYYY'/>

          </View>

          <View style={Styles.imgText5}>
          <Text style={Styles.imgText6}>Change Mobile No. </Text>
        </View>
        
       
        
        <View style={Styles.bottomdesign}>
        <Image source={BottomImg} style={{ height: 290, width: 300,  }} />
        </View>
        

        
        <View style={Styles.ArrowbuttonPosition}>
          

          <TouchableOpacity style={Styles.buttonDesign}>
            <View style={Styles.buttonDesign1}>
              <Text style={Styles.buttonText} onPress={() => navigation.navigate("BusinessDetails")}>Next</Text>
            </View>
            <Image
              source={forwardImg}
              style={{height: 20, width: 40, marginVertical: 10, marginLeft: -8}}
            />
          </TouchableOpacity>

          
        </View>
        


        </ScrollView>
        
          
        
      


       


    </View>



  );
};


const Styles = StyleSheet.create({

  buttonDesign: {
    backgroundColor: 'blue',

    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
  },
   
  buttonDesign1: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  ArrowbuttonPosition: {
   
    marginTop: -200,
    marginBottom: 30,
    marginLeft: 230,
    flexDirection: 'row',
    
    // position: "absolute",
    justifyContent: 'space-between',
  },

  logoDesign: {
    marginTop: -40,
    marginLeft: -50
  },
  bottomdesign:{
    marginTop: 90,
    marginLeft: 173
    
  },
  imgText1: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: 'center',
    color: "black",
    marginTop: 15,
    marginRight: 20,
    marginLeft: 90,
    height: 40,
    width: 200,
    


  },
  imgText3: {
    backgroundColor: "white",
    fontSize: 17,
    fontWeight: "700",
    fontStyle: "normal",
    color: "black",
    marginLeft: 60,
    paddingLeft: 0,
    paddingTop: 4,
    zIndex: 1,
    position: "absolute",
    



  },
  imgText2: {
    
    textAlign: 'center',
    letterSpacing: 6,
    position: "relative",
    marginBottom: 0
    


  },

  labelDesign:{
    backgroundColor: "blue",
  
    
  },

  imgText4: {
  
    zIndex: -1,
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    color: "black",
    paddingTop: 15,
    paddingBottom:5,
    paddingLeft: 13,
    borderWidth: 1,
    margin: 15,
    marginHorizontal: 50,
  },

  imgText7: {
    
    zIndex: 2,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: "black",
    paddingTop: 15,
    paddingBottom:5,
    paddingLeft: 13,
    borderWidth: 1,
    margin:20,
    marginBottom: 10,
    marginHorizontal: 50,
  },

  inputStyle: {
    padding: 1,
    paddingLeft: 10,
    letterSpacing: 1,
    color: "#36454F",
    height: 35,
    width: 40,
    lineHeight: 10,
    borderWidth: 4,
    borderRadius: 5,
    marginTop: 600,
    marginRight: 35,
    shadowRadius: 50,

    fontSize: 20,
    textAlign: "left",
    fontWeight: "500",
    shadowColor: "#151414",
    shadowOffset: {
      width: 6,
      height: 6,

    },
    shadowOpacity: 0.6,
    shadowRadius: 4



  },

  inputStyle1: {

    marginTop: 30,
    textAlign: "center",
    height: 40,
    width: 55,
    color: "#151414",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 7,


  },

  inputStyle2: {
    flexDirection: "row",
    paddingLeft: 55,
    paddingTop: 2


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
    marginTop: 650,
    marginRight: 35,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute"


  },
  imgText5: {
    paddingLeft: 120,
    marginTop: 15,
    flexDirection: "row",
   
    

  },

  imgText6: {
    fontStyle: "normal",
    color: "grey",
    fontWeight: "700",
    fontSize: 17,
    color: "blue",
    marginTop: -18
    
    
  },



  button: {
    height: 35,
    width: 100,
    borderRadius: 20,
    textAlign: "center",
    backgroundColor: "grey",
    color: "black",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    paddingLeft: 1 ,
    paddingTop: 3

  },
  buttonposition: {
    position: "absolute",
    textAlign: "center",
    margin: 30,
    paddingRight: 60,
    paddingTop: 120,
    paddingLeft: 200,
    


  },

  buttonposition1: {
    paddingTop: 600,
    paddingRight: 30,
    
  },
 
  forwardButton:{
  borderWidth:2,
  paddingLeft: 70,
  paddingBottom:40,
  marginLeft: 20,
  marginBotto: 90
  },
  

  imgText8: {
    margin: 20,
    marginRight: 20,
    padding: 5,
    paddingLeft: 15,

  },

  imgText9: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  }




 
});

export default App