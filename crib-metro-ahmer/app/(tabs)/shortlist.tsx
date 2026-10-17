import {useRouter} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {FlatList,Pressable,StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import PropertyCard from '../../components/PropertyCard';
import {useShortlist} from '../../context/ShortlistContext';
import {properties} from '../../data/properties';
import {colors} from '../../styles/theme';
export default function ShortlistScreen(){
 const router=useRouter();const {ids}=useShortlist();const saved=properties.filter(p=>ids.includes(p.id));
 return <SafeAreaView style={styles.safe} edges={['top']}><FlatList data={saved} keyExtractor={p=>p.id} contentContainerStyle={styles.body} renderItem={({item})=><PropertyCard property={item}/>} ListHeaderComponent={<PageHeader eyebrow="YOUR FAVORITES" title="Your shortlist." subtitle="Tap a heart on any property to add or remove it here."/>} ListEmptyComponent={<View style={styles.empty}><Ionicons name="heart-outline" size={44} color={colors.coral}/><Text style={styles.emptyTitle}>Nothing saved yet</Text><Text style={styles.emptyText}>Explore property cards and tap the heart icon to build your shortlist.</Text><Pressable style={styles.button} onPress={()=>router.push('/(tabs)/search')}><Text style={styles.buttonText}>Browse properties</Text></Pressable></View>}/></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},body:{padding:18,paddingBottom:30,flexGrow:1},empty:{backgroundColor:'#FFFFFF',borderWidth:1,borderColor:colors.border,borderRadius:20,padding:28,alignItems:'center',marginTop:16},emptyTitle:{color:colors.ink,fontSize:19,fontWeight:'900',marginTop:14},emptyText:{color:colors.muted,textAlign:'center',marginTop:9,lineHeight:20},button:{backgroundColor:colors.plum,borderRadius:12,paddingHorizontal:20,paddingVertical:13,marginTop:20},buttonText:{color:'#FFFFFF',fontWeight:'800'}});
