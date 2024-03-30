import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer}   from '@react-navigation/native';
import Drawer from 'drawer-navigation/Drawer';
import screen1 from "./src/screen/screen1";
import screen2 from "./src/screen/screen2";
import screen3 from "./src/screen/screen3";
import screen4 from "./src/screen/screen4";
import screen5 from "./src/screen/screen5";
import screen6 from "./src/screen/screen6";
const Drawer = createDrawerNavigator();

export default function App() {
return (
  <NavigationContainer>

    <Drawer.Navigator initialRouteName="Screen1" screenOptions={{headerShown: false}}>
      
      <Drawer.Screen name='Screen1' component={screen1}/>
      <Drawer.Screen name='Screen2' component={screen2}/>
      <Drawer.Screen name='Screen3' component={screen3}/>
      <Drawer.Screen name='Screen4' component={screen4}/>
      <Drawer.Screen name='Screen5' component={screen5}/>
      <Drawer.Screen name='Screen6' component={screen6}/>
    </Drawer.Navigator>

  </NavigationContainer>

  // <ProfileScreen />
)

};

