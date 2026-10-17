import {Ionicons} from '@expo/vector-icons';
import {Tabs} from 'expo-router';
import {colors} from '../../styles/theme';
export default function TabsLayout(){
 return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:colors.plum,tabBarInactiveTintColor:colors.muted,tabBarStyle:{height:63,paddingBottom:7,backgroundColor:'#FFFFFF',borderTopColor:colors.border},tabBarLabelStyle:{fontSize:11,fontWeight:'700'}}}>
   <Tabs.Screen name="index" options={{title:'Explore',tabBarIcon:({color,size})=><Ionicons name="compass-outline" color={color} size={size}/>}}/>
   <Tabs.Screen name="search" options={{title:'Find',tabBarIcon:({color,size})=><Ionicons name="search-outline" color={color} size={size}/>}}/>
   <Tabs.Screen name="shortlist" options={{title:'Shortlist',tabBarIcon:({color,size})=><Ionicons name="heart-outline" color={color} size={size}/>}}/>
   <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:({color,size})=><Ionicons name="person-circle-outline" color={color} size={size}/>}}/>
 </Tabs>;
}
