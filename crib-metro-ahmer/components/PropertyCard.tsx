import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useShortlist} from '../context/ShortlistContext';
import {formatPrice, Property} from '../data/properties';
import {colors} from '../styles/theme';

export default function PropertyCard({property}:{property:Property}) {
  const router=useRouter();
  const {has,toggle}=useShortlist();
  const saved=has(property.id);
  return (
    <Pressable style={styles.card} onPress={()=>router.push({pathname:'/property/[id]',params:{id:property.id}})}>
      <View style={[styles.art,{backgroundColor:property.accent}]}>
        <View style={styles.artRoof} />
        <Ionicons name="business-outline" size={48} color="#FFFFFF" />
        <Text style={styles.artLabel}>{property.tag.toUpperCase()}</Text>
        <Pressable style={styles.heart} onPress={(event)=>{event.stopPropagation();toggle(property.id);}} accessibilityLabel={saved?'Remove from shortlist':'Add to shortlist'}>
          <Ionicons name={saved?'heart':'heart-outline'} size={20} color={saved?colors.coral:colors.ink}/>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.top}><Text style={styles.category}>{property.category}</Text><Text style={styles.price}>{formatPrice(property.priceM)}</Text></View>
        <Text style={styles.name}>{property.title}</Text>
        <Text style={styles.location}><Ionicons name="location-outline" size={13}/> {property.area}, {property.city}</Text>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{property.beds} bed</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>{property.baths} bath</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>{property.sqft} sqft</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles=StyleSheet.create({
  card:{backgroundColor:colors.paper,borderRadius:19,overflow:'hidden',borderWidth:1,borderColor:colors.border,marginBottom:16},
  art:{height:118,alignItems:'center',justifyContent:'center',position:'relative'},
  artRoof:{position:'absolute',width:110,height:110,borderWidth:1,borderColor:'#FFFFFF55',borderRadius:55},
  artLabel:{fontSize:10,color:'#FFFFFF',fontWeight:'700',letterSpacing:2,marginTop:7},
  heart:{position:'absolute',top:12,right:12,backgroundColor:colors.paper,borderRadius:30,width:36,height:36,alignItems:'center',justifyContent:'center'},
  content:{padding:15},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  category:{fontSize:11,color:colors.plum,fontWeight:'800',textTransform:'uppercase',letterSpacing:.7},
  price:{fontSize:12,color:colors.green,fontWeight:'800'},
  name:{fontSize:19,fontWeight:'800',color:colors.ink,marginTop:6},
  location:{fontSize:12,color:colors.muted,marginTop:5},
  meta:{flexDirection:'row',gap:7,marginTop:12,alignItems:'center'},metaText:{fontSize:12,color:colors.ink,fontWeight:'600'},dot:{color:colors.coral}
});
