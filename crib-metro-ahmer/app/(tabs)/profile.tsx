import {Ionicons} from '@expo/vector-icons';
import {ScrollView,StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//changed
import PageHeader from '../../components/PageHeader';

import {useShortlist} from '../../context/ShortlistContext';
import {properties} from '../../data/properties';
import {colors} from '../../styles/theme';
export default function ProfileScreen(){
 const {ids}=useShortlist();
 return <SafeAreaView style={styles.safe} edges={['top']}><ScrollView contentContainerStyle={styles.body}>
   <PageHeader eyebrow="PROJECT PROFILE" title="Built by Ahmer." subtitle="A React Native and Expo demonstration for Mobile Application Development."/>
   <View style={styles.hero}><Ionicons name="person-circle-outline" size={62} color="#FFFFFF"/><Text style={styles.name}>Syed Ahmer Ali</Text><Text style={styles.code}>SE-23099  •  NED University</Text></View>
   <View style={styles.stats}><View style={styles.metric}><Text style={styles.big}>{properties.length}</Text><Text style={styles.small}>Sample homes</Text></View><View style={styles.metric}><Text style={styles.big}>{ids.length}</Text><Text style={styles.small}>Shortlisted</Text></View></View>
   <Text style={styles.heading}>About the app</Text>
   <Text style={styles.details}>Crib Metro helps students explore fictional property-sale listings in Pakistan using keyword search, budget filters, property details and a shortlist. These listings are made only for coursework; the app does not require a server or login.</Text>
   <View style={styles.note}><Ionicons name="information-circle-outline" size={18} color={colors.plum}/><Text style={styles.noteText}>Shortlisted properties are stored in memory and reset when the app process restarts.</Text></View>
 </ScrollView></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},body:{padding:18,paddingBottom:28},hero:{backgroundColor:colors.plum,borderRadius:20,padding:24,alignItems:'center'},name:{fontSize:22,fontWeight:'900',color:'#FFFFFF',marginTop:6},code:{fontSize:13,color:'#E9DEFA',marginTop:7},stats:{flexDirection:'row',gap:12,marginTop:16},metric:{backgroundColor:'#FFFFFF',borderColor:colors.border,borderWidth:1,borderRadius:16,padding:17,flex:1},big:{fontSize:27,fontWeight:'900',color:colors.coral},small:{fontSize:12,color:colors.muted,marginTop:4},heading:{fontSize:19,color:colors.ink,fontWeight:'900',marginTop:27,marginBottom:10},details:{fontSize:14,color:colors.muted,lineHeight:22},note:{flexDirection:'row',gap:9,backgroundColor:colors.plumLight,padding:15,borderRadius:15,marginTop:22},noteText:{color:colors.plum,flex:1,fontSize:12,lineHeight:18}});
