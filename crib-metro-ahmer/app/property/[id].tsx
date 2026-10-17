import {Ionicons} from '@expo/vector-icons';
import {useLocalSearchParams} from 'expo-router';
import {Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useShortlist} from '../../context/ShortlistContext';
import {formatPrice,properties} from '../../data/properties';
import {colors} from '../../styles/theme';
export default function PropertyDetailsScreen(){
 const {id}=useLocalSearchParams<{id:string}>();const property=properties.find(p=>p.id===id);
 const {has,toggle}=useShortlist();
 if(!property) return <SafeAreaView style={styles.safe}><Text style={styles.missing}>Property was not found.</Text></SafeAreaView>;
 const saved=has(property.id);
 const deposit=property.priceM*.2;
 return <SafeAreaView style={styles.safe} edges={['bottom']}><ScrollView contentContainerStyle={styles.body}>
   <View style={[styles.art,{backgroundColor:property.accent}]}><Ionicons name="business-outline" size={72} color="#FFFFFF"/><Text style={styles.artTag}>{property.tag.toUpperCase()}</Text></View>
   <View style={styles.info}><Text style={styles.type}>{property.category.toUpperCase()}</Text><Text style={styles.title}>{property.title}</Text><Text style={styles.area}><Ionicons name="location-outline" size={15}/> {property.area}, {property.city}</Text>
     <Text style={styles.price}>{formatPrice(property.priceM)}</Text>
     <View style={styles.meta}><Text style={styles.metaText}>{property.beds} bedrooms</Text><Text style={styles.metaText}>{property.baths} bathrooms</Text><Text style={styles.metaText}>{property.sqft} sqft</Text></View>
     <Text style={styles.heading}>Home overview</Text><Text style={styles.description}>{property.description}</Text>
     <View style={styles.deposit}><Text style={styles.depositLabel}>Example 20% deposit (calculation only)</Text><Text style={styles.depositAmount}>{formatPrice(deposit)}</Text><Text style={styles.disclaimer}>Illustrative arithmetic, not a mortgage quote or actual offer.</Text></View>
     <Pressable style={[styles.button,saved&&styles.buttonAlt]} onPress={()=>toggle(property.id)}><Ionicons name={saved?'heart':'heart-outline'} size={19} color="#FFFFFF"/><Text style={styles.buttonText}>{saved?'Remove from shortlist':'Save to shortlist'}</Text></Pressable>
   </View>
 </ScrollView></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},body:{paddingBottom:30},art:{height:225,justifyContent:'center',alignItems:'center'},artTag:{color:'#FFFFFF',fontSize:12,letterSpacing:2,marginTop:8,fontWeight:'900'},info:{padding:20},type:{color:colors.plum,letterSpacing:2,fontSize:12,fontWeight:'800'},title:{fontSize:28,fontWeight:'900',color:colors.ink,marginTop:7},area:{fontSize:14,color:colors.muted,marginTop:8},price:{fontSize:22,color:colors.green,fontWeight:'900',marginTop:16},meta:{flexDirection:'row',flexWrap:'wrap',gap:9,marginTop:17},metaText:{backgroundColor:colors.plumLight,color:colors.plum,fontSize:12,overflow:'hidden',padding:9,borderRadius:9,fontWeight:'800'},heading:{fontSize:19,fontWeight:'900',color:colors.ink,marginTop:24,marginBottom:9},description:{fontSize:14,color:colors.muted,lineHeight:22},deposit:{borderRadius:16,padding:17,backgroundColor:colors.coralLight,marginTop:22},depositLabel:{fontSize:12,color:colors.ink,fontWeight:'700'},depositAmount:{fontSize:24,color:colors.coral,fontWeight:'900',marginTop:8},disclaimer:{fontSize:11,color:colors.muted,marginTop:7},button:{backgroundColor:colors.plum,borderRadius:14,paddingVertical:15,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,marginTop:24},buttonAlt:{backgroundColor:colors.coral},buttonText:{color:'#FFFFFF',fontWeight:'900',fontSize:15},missing:{padding:20,color:colors.ink}});
