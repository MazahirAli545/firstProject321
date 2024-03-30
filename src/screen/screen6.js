import React from 'react';
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
  TouchableOpacity,
} from 'react-native';
import {styles} from './ScreenNavigation';
import topImg from '../assets/business_type/top_shape.png';
import BottomImg from '../assets/business_type/bottom_shape.png';
import forwardImg from '../assets/image/forward.png';
import backwardImg from '../assets/image/back.png';
import logo from '../assets/business_type/Blogging-bro.png';

const App = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={Styles.logoDesign}>
        <View style={Styles.logoDesign1}>
          <Image source={logo} style={{height: 250, width: 200}} />
        </View>
        <View style={Styles.logoDesign2}>
          <Image source={topImg} style={{height: 300, width: 280}} />
        </View>
      </View>

      <Text style={Styles.imgText1}>PCS (Per Design)</Text>
      <Text style={Styles.imgText8}>(example: earning)</Text>

       <View style={Styles.imgText2}>
          <View style={Styles.labelDesign}>
            <Text style={Styles.imgText3}></Text>
          </View>
          <View >
          <Text style={Styles.imgText4}>50 - 60 PCS</Text>
          </View>
          <View style={Styles.labelDesign}>
            <Text style={Styles.imgText3}></Text>
          </View>
          <View >
          <Text style={Styles.imgText4}>12 - 24 PCS</Text>
          </View>

          <View style={Styles.labelDesign}>
            <Text style={Styles.imgText3}></Text>
          </View>
          <View >
          <Text style={Styles.imgText4}>05 - 10 PCS</Text>
          </View>


          
          <View style={Styles.labelDesign}>
            <Text style={Styles.imgText3}></Text>
          </View>
          <View >
          <Text style={Styles.imgText4}>01 - 02 PCS</Text>
          </View>

          
        </View> 

        <Image source={BottomImg} style={{height: 200, width: 250, position: "absolute", bottom: -60, marginLeft: -80, zIndex: -1}} />
        <View style={Styles.ArrowbuttonPosition}>
          <TouchableOpacity style={Styles.buttonDesign}>
            
            <Image
              source={backwardImg}
              style={{height: 20, width: 40, marginVertical: 10, marginRight: -10}}
            />
            <View style={Styles.buttonDesign1}>
              <Text style={Styles.buttonText} onPress={() => navigation.navigate("ChooseUserType")}>Back</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.buttonDesign}>
            <View style={Styles.buttonDesign1}>
              <Text style={Styles.buttonText} onPress={() => navigation.navigate("Home")}>Next</Text>
            </View>
            <Image
              source={forwardImg}
              style={{height: 20, width: 40, marginVertical: 10, marginLeft: -10}}
            />
          </TouchableOpacity>
        </View>
      
        
    </View>
  );
};

const Styles = StyleSheet.create({
  logoDesign: {
    flexDirection: 'row',
    marginTop: -30
  },

  logoDesign1: {
    marginLeft: 80,
    marginTop: -20,
    position: "absolute"
    
  },
  bottomlogo: {
    marginTop: 50,
  },
  logoDesign2: {
    // zIndex: 1,
    marginLeft : 220,
    marginTop: -50

  },

  bottomdesign: {
    position: "absolute",
    bottom: 0,
    // flex: 1,
    borderWidth: 1,
    // marginTop: 50,
    // marginLeft: -80,
    // marginRight: 350,
    // paddingRight: 200,
  },
  imgText1: {
    marginTop: -10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginRight: 20,
    marginLeft: 85,
    height: 25,
    width: 200,
  },
  imgText3: {
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 40,
    marginTop: 19,
    height: 25,
    fontWeight: '100',
    fontStyle: 'normal',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 3,

    position: 'absolute',
  },

  imgText8: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: 'grey',

    marginRight: 20,
    marginLeft: 85,
    height: 50,
    width: 200,
  },
  imgText2: {
    flex: 1,
    elevation: 5,
    paddingBottom: 10,
    letterSpacing: 6,
    
  },

  labelDesign: {
    backgroundColor: 'white',
    fontWeight: '100',
    
  },

  imgText4: {
    
    zIndex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'black',
    
    paddingTop: 9,
    paddingBottom: 12,
    paddingLeft: 58,
    borderWidth: 1,
    margin: 20,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
  },

  imgText7: {
    zIndex: 2,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 13,
    borderWidth: 1,
    margin: 20,
    marginBottom: 10,
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
    marginTop: 650,
    marginRight: 35,
    backgroundColor: '#ffffff',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    position: 'absolute',
  },
  imgText5: {
    paddingLeft: 120,
    marginTop: 0,
    flexDirection: 'row',
  },

  imgText6: {
    fontStyle: 'normal',
    color: 'grey',
    fontWeight: '700',
    fontSize: 17,
    color: 'blue',
  },

  buttonDesign: {
    backgroundColor: 'blue',

    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
  },

  buttonDesign1: {
    backgroundColor: 'white',
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16, 
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 1,
    paddingVertical: 8,
  },

  ArrowbuttonPosition: {
   
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 25,
    flexDirection: 'row',
    
    // position: "absolute",
    justifyContent: 'space-between',
  },
});

export default App;
