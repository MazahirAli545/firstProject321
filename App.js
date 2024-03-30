import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/MainProject/SplashScreen';
import Home from './src/MainProject/Home';
import Tasks from './src/MainProject/Tasks';
import CreateTasks from './src/MainProject/CreateTasks';
import Setings from './src/MainProject/Settings';
import Settings from './src/MainProject/Settings';





export default function App() {
  const Drawer = createDrawerNavigator();
  return (

    <NavigationContainer>
    
    <Drawer.Navigatior>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="CreateTasks" component={CreateTasks} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigatior>
      </NavigationContainer>
  );
}
