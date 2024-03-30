import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>HomeScreen</Text>
      
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    textAlign: "center",
    color: "blue"
  }
});

export default HomeScreen;
