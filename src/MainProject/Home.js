import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  _View,
  TouchableOpacity,
  StatusBar,
  
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer}   from '@react-navigation/native';
// import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import {Card} from 'react-native-paper';
import panditji from '../assets/image/Pandit-ji.png';
import Banner from '../assets/image/Bannner_Image.jpg';
import { Image } from 'react-native-animatable';
import HomeImg from '../assets/footer_icons/HomeFooter.png';
import List from '../assets/footer_icons/List.png';
import Plus from '../assets/footer_icons/plus.png';
import Setting from '../assets/footer_icons/setting.png';






export const Home = ({navigation, route}) => {

  // const {name} = route.params;

  return (
   

    <View style={{flex: 1}}>
      




      <View style={{margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            color: 'black',
            marginTop: 5,
          }}>
         {/* {UserName} */}
         {/* {name} */}
hcfhcgh
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContianerStyle={Styles.scrollViewContainer}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

<View>
      <Image source={Banner} style={{height: 140, width:330, marginHorizontal: 15}}/>
      </View>
        <View style={Styles.ButtonContainer}>
          <TouchableOpacity>
            <View style={Styles.ButtonView}>
              <Text style={Styles.ButtonText}>Total{'\n'}  Tasks{'\n'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateTasks")}>
            <View style={Styles.ButtonView1}>
              <Text style={Styles.ButtonText1}> Create{'\n'} Tasks</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: -190}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '700',
              marginLeft: 15,
              color: 'black',
            }}>
            Latest Tasks
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
            <Text style={{fontSize: 14, paddingLeft: 140, color: 'darkblue'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.cardContainer}>
          <Card
            style={{
              height: 350,
              width: 315,
              backgroundColor: '#87CEEB',
              marginLeft: 20,
              marginRight: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
              <Card.Content style={{borderRadius: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Pandit ji:{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Pandit ji: It is a convenient platform designed to
                    streamline the process of booking pandits for various
                    religious ceremonies and rituals, particularly poojas{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Through this app, customers can easily find and book pandits
                    for specific occasions such as weddings, housewarmings,
                    festivals, and other religious events.
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginTop: 14,
                      marginLeft: 200
                    }}>
                    29-03-2024
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginLeft: 200,
                      alignSelf : "flex-end"
                      
                    }}>
                    2:48 PM
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card>
        </View>
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

export default Home;
