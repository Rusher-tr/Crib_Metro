import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import PropertyCard from '../../components/PropertyCard';
import {properties} from '../../data/properties';
import {colors} from '../../styles/theme';
export default function ExploreScreen(){
 const router=useRouter();
 return <SafeAreaView style={styles.safe} edges={['top']}><FlatList data={properties.slice(0,5)} keyExtractor={item=>item.id} contentContainerStyle={styles.body} renderItem={({item})=><PropertyCard property={item}/>} ListHeaderComponent={<>
   <PageHeader eyebrow="CRIB METRO / CITY LIVING" title="Find your next place." subtitle="Explore thoughtfully selected fictional homes across Pakistan."/>
   <Pressable style={styles.banner} onPress={()=>router.push('/(tabs)/search')}>
     <View style={{flex:1}}><Text style={styles.bannerTitle}>Your next address starts here</Text><Text style={styles.bannerSub}>Browse by city, budget and home type.</Text></View>
     <Ionicons name="arrow-forward-circle" size={34} color="#FFFFFF"/>
   </Pressable>
   <View style={styles.section}><Text style={styles.sectionTitle}>Featured homes</Text><Text style={styles.sectionMeta}>SAMPLE LISTINGS</Text></View>
 </>} ListFooterComponent={<Text style={styles.foot}>Demonstration data only — not real estate advertisements.</Text>}/></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},body:{paddingHorizontal:18,paddingTop:18,paddingBottom:22},banner:{backgroundColor:colors.plum,padding:20,borderRadius:20,flexDirection:'row',alignItems:'center',marginBottom:24},bannerTitle:{fontSize:18,fontWeight:'900',color:'#FFFFFF',lineHeight:23},bannerSub:{fontSize:12,color:'#E8DDF6',marginTop:7},section:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:12},sectionTitle:{fontSize:20,color:colors.ink,fontWeight:'900'},sectionMeta:{fontSize:10,color:colors.coral,fontWeight:'800',letterSpacing:1.2},foot:{fontSize:11,color:colors.muted,textAlign:'center',marginTop:5}});
