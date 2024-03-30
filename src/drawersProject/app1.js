import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer}   from '@react-navigation/native';
import ProfileScreen from './src/drawersProject/ProfileScreen';
import HomeScreen from './src/drawersProject/HomeScreen';

import FlatListScreen from './src/drawersProject/FlatListScreen';

const Drawer = createDrawerNavigator();

export const App = () => {
return (
  <NavigationContainer>

    <Drawer.Navigator>
      
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Profile' component={ProfileScreen}/>
      <Drawer.Screen name='FlatList' component={FlatListScreen}/>
    </Drawer.Navigator>

  </NavigationContainer>

  // <ProfileScreen />
)

};

export default App;