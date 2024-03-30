import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, VirtualizedList, View, _View, ScrollView, Animated, SafeAreaView, } from 'react-native';
import { styles } from './App';
import logoImg from './src/assets/image/otpImage.png'
import footerImg from './src/assets/image/shape.png'



export const App = () => {


  const [people, setPeople] = useState([
    { name: 'Row 1', key: '1' },
    { name: 'Row 2', key: '2' },
    { name: 'Row 3', key: '3' },
    { name: 'Row 4', key: '4' },
    { name: 'Row 5', key: '5' },
    { name: 'Row 6', key: '6' },
    { name: 'Row 7', key: '7' },
    { name: 'Row 8', key: '8' },
    { name: 'Row 9', key: '9' },
    { name: 'Row 10', key: '10' },
    { name: 'Row 11', key: '11' },
    { name: 'Row 12', key: '12' },
  ]);
  const deltaY = new Animated.Value(0);
  const deltaX = new Animated.Value(0);

  return (

    <SafeAreaView style={Styles.container}>

      <View style={Styles.content}>
        <Animated.View
        style={{
          transform: [
            {
              translateY: deltaY.interpolate({
                inputRange: [-150, -150, 0 , 0],
                outputRange: [-58, -58, 8, 0],
              }),
            },
            {
              scale: deltaY.interpolate({
                inputRange: [-150, -150, 0, 0],
                outputRange: [0.35, 0.35, 1, 1],
              }),
            },
          ],
        }}>
       
       <Text style={Styles.headerText}>Animated Header</Text>

        </Animated.View>
      
      </View>

 
        
      <ScrollView style={Styles.scrollview}>

        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={Styles.contentText1}>{item.name} </Text>
            </View>
          );
        })}



      </ScrollView>


      <View style={Styles.footerText}>
        <Text style={Styles.footerText2}>Animated Footer</Text>
      </View>


    </SafeAreaView>
  )
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100',
    // flexDirection: 'row's,
    alignItems: 'top',
    justifyContent: "center",
    padding: 20,



  },

  headerText: {
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

  contentText1: {
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

});

export default App


/* isme animated lagana hei footer or header mei
 jab sikh jaoo tab  */