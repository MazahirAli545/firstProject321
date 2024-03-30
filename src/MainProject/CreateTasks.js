import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  _View,
  TouchableOpacity,
  StatusBar,
  TextInput
  
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import {Card} from 'react-native-paper';
import panditji from '../assets/image/Pandit-ji.png';
import Banner from '../assets/image/Bannner_Image.jpg';
import { Image } from 'react-native-animatable';
import HomeImg from '../assets/footer_icons/HomeFooter.png';
import List from '../assets/footer_icons/List.png';
import Plus from '../assets/footer_icons/plus.png';
import Setting from '../assets/footer_icons/setting.png';




const CreateTasks = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
          Create Tasks :
        </Text>
        
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContianerStyle={Styles.scrollViewContainer}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />


        <View style={{ marginVertical: 10}}>
            <Text style={{fontSize: 25, color: "black", fontWeight: "500", marginHorizontal: 20}}>
                Profile
            </Text>
            <View >
            <TextInput style={{fontSize: 20, borderWidth: 1, marginHorizontal: 20, borderRadius: 30, paddingLeft: 10}}
            placeholder='Enter your Profile' />
            </View>
         </View>

         <View style={{ marginVertical: 10}}>
            <Text style={{fontSize: 25, color: "black", fontWeight: "500", marginHorizontal: 20, }}>
                App Name
            </Text>
            <View >
            <TextInput style={{fontSize: 20, borderWidth: 1, marginHorizontal: 20, borderRadius: 30, paddingLeft: 10}}
            placeholder='Enter your App Name' />
            </View>
         </View>

         <View style={{ marginVertical: 10}}>
            <Text style={{fontSize: 25, color: "black", fontWeight: "500", marginHorizontal: 20}}>
                Description
            </Text>
            <View >
            <TextInput style={{fontSize: 20, height: 150, width :320, borderWidth: 1, marginHorizontal: 20,  borderRadius: 30, paddingLeft: 10}}
            placeholder='Enter your App Description' />
            </View>
         </View>

         <View style={{ marginVertical: 10}}>
            <Text style={{fontSize: 25, color: "black", fontWeight: "500", marginHorizontal: 20}}>
                Date Of Submission
            </Text>
            <View >
            <TextInput style={{fontSize: 20, height: 150, width :320, borderWidth: 1, marginHorizontal: 20, borderRadius: 30}}
            placeholder='enter the date ' />
            </View>
         </View>
         <TouchableOpacity onPress={console.log("Submited")}>
            <Text style={{fontSize:20, marginLeft:90, paddingLeft: 50, borderRadius: 30, marginVertical: 20, paddingVertical: 10, backgroundColor: "blue", color: "white", borderWidth: 1, marginRight:100, textAlign:"center, "}}>Submit</Text>
         </TouchableOpacity>
      </KeyboardAwareScrollView>

    
      <View style ={{flexDirection: "row",   marginVertical: 5, backgroundColor:"lightyellow", elevation: 5,marginHorizontal:5, paddingVertical: 5, borderRadius:30}}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
       <Image source={HomeImg} style={{height: 50, width:40, marginLeft: 30,  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
       <Image  source={List} style={{height: 50, width:50,marginLeft: 30}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("CreateTasks")}>
       <Image source={Plus} style={{height: 50, width:50, marginLeft: 30}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
       <Image source={Setting} style={{height: 50, width:50, marginLeft: 30}}/>
       </TouchableOpacity>
      </View>
    </View>
   
  );
};

const Styles = StyleSheet.create({
  ButtonView: {
    borderColor: 'black',
    
  },

  cardContainer: {
    marginTop: 10,
    marginBottom: 1000,
    height: 500,
    width: 300,
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: -190
  },
  ButtonText: {
    backgroundColor: "blue",
    paddingTop: 10,
    color: "#fff",
    paddingRight: 10,
    textAlign:"center",
    fontSize: 25,
    width: 100,
    height: 90,
    borderWidth: 1,
    marginLeft: 70,
    marginVertical: 220,
    borderRadius: 20,
  },

  ButtonText1: {
    backgroundColor: "blue",
    paddingTop: 10,
    color: "#fff",
    paddingRight: 10,
    textAlign:"center",
    fontSize: 25,
    width: 100,
    height: 90,
    borderWidth: 1,
    marginLeft: 20,
    marginVertical: 220,
    borderRadius: 20,
  },
});

export default CreateTasks;
