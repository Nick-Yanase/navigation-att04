import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from
'@react-navigation/native-stack';
import HomeScreen from
'./screens/HomeScreen';
import DetailsScreen from
'./screens/DetailsScreen';
import AboutScreen from
'./screens/AboutScreen';

export default function App() {
const Stack = createNativeStackNavigator();
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home"
      component={HomeScreen} />
      <Stack.Screen name="Details"
      component={DetailsScreen} />
      <Stack.Screen name="About"
      component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}