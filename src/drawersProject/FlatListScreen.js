import React, {useState} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';

const FlatListScreen = () => {
const [people, setPeople] = useState ([
    {name: "shaun", key: "1"},
    {name: "yoshi", key: "1"},
    {name: "mario", key: "1"},
    {name: "lulgi", key: "1"},
    {name: "peach", key: "1"},
    {name: "toad", key: "1"},
    {name: "bowser", key: "1"},

]);

  return (
    <View style={Styles.container}>
        <FlatList
        data={people}
        renderItem={({ item}) => (
         <Text style={Styles.item}> {item.name}</Text>
        )}
        />
    </View>
    );
        }
  
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },

  item: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
    padding: 20,
    borderWidth: 1,
    margin: 20,
    backgroundColor: "grey"
  }
});

export default FlatListScreen;