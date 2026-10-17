import {Stack} from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ShortlistProvider} from '../context/ShortlistContext';
import {colors} from '../styles/theme';
export default function RootLayout(){
 return <SafeAreaProvider><ShortlistProvider><Stack screenOptions={{headerStyle:{backgroundColor:colors.paper},headerTintColor:colors.plum,headerTitleStyle:{fontWeight:'800'}}}>
   <Stack.Screen name="index" options={{headerShown:false}}/>
   <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
   <Stack.Screen name="property/[id]" options={{title:'Property details'}}/>
 </Stack></ShortlistProvider></SafeAreaProvider>;
}
