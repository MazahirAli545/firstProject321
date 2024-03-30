import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import screen1 from "./src/screen/screen1";
import screen2 from "./src/screen/screen2";
import screen3 from "./src/screen/screen3";
import screen4 from "./src/screen/screen4";
import screen5 from "./src/screen/screen5";
import screen6 from "./src/screen/screen6";
// import MobileScreen from './MobileScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name= "Home" component={screen1} />
        <Stack.Screen name= "HomeScreen2" component={screen2} />
        <Stack.Screen name= "PersonalDetails" component={screen3} />
        <Stack.Screen name= "BusinessDetails" component={screen4} />
        <Stack.Screen name= "ChooseUserType" component={screen5} />
        <Stack.Screen name= "PCS_PerDesign" component={screen6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
