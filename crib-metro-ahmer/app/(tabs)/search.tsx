import {useMemo,useState} from 'react';
import {FlatList,Pressable,StyleSheet,Text,TextInput,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import PropertyCard from '../../components/PropertyCard';
import {properties} from '../../data/properties';
import {colors} from '../../styles/theme';
const budgets=[{label:'All budgets',max:Infinity},{label:'Under 20M',max:20},{label:'Under 30M',max:30},{label:'Under 45M',max:45}];
export default function SearchScreen(){
 const [query,setQuery]=useState('');const [budget,setBudget]=useState(0);
 const matches=useMemo(()=>properties.filter(p=>(p.title+' '+p.area+' '+p.city+' '+p.category).toLowerCase().includes(query.trim().toLowerCase())&&p.priceM<=budgets[budget].max),[query,budget]);
 return <SafeAreaView style={styles.safe} edges={['top']}><FlatList data={matches} keyExtractor={p=>p.id} contentContainerStyle={styles.body} renderItem={({item})=><PropertyCard property={item}/>} ListHeaderComponent={<>
   <PageHeader eyebrow="SMART SEARCH" title="Explore by budget." subtitle="Filter sample sale listings by neighborhood, city or property type."/>
   <View style={styles.inputWrap}><Ionicons name="search" size={20} color={colors.plum}/><TextInput value={query} onChangeText={setQuery} placeholder="Try Karachi or Studio" placeholderTextColor={colors.muted} style={styles.input}/></View>
   <View style={styles.filters}>{budgets.map((item,i)=><Pressable key={item.label} onPress={()=>setBudget(i)} style={[styles.chip,i===budget&&styles.selected]}><Text style={[styles.chipText,i===budget&&styles.selectedText]}>{item.label}</Text></Pressable>)}</View>
   <Text style={styles.result}>{matches.length} matching sample {matches.length===1?'property':'properties'}</Text>
 </>} ListEmptyComponent={<View style={styles.empty}><Ionicons name="search-outline" size={30} color={colors.plum}/><Text style={styles.emptyTitle}>No matches found</Text><Text style={styles.emptyHint}>Try a different location or budget.</Text></View>}/></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},body:{padding:18,paddingBottom:30},inputWrap:{backgroundColor:'#FFFFFF',borderRadius:14,borderColor:colors.border,borderWidth:1,flexDirection:'row',alignItems:'center',gap:10,paddingHorizontal:12,marginBottom:13},input:{flex:1,minHeight:48,fontSize:14,color:colors.ink},filters:{flexDirection:'row',flexWrap:'wrap',gap:8,marginBottom:15},chip:{paddingVertical:10,paddingHorizontal:12,borderRadius:30,backgroundColor:'#FFFFFF',borderWidth:1,borderColor:colors.border},selected:{backgroundColor:colors.plum,borderColor:colors.plum},chipText:{color:colors.ink,fontWeight:'700',fontSize:12},selectedText:{color:'#FFFFFF'},result:{fontSize:12,color:colors.muted,marginBottom:14,fontWeight:'700'},empty:{alignItems:'center',padding:35,marginTop:20},emptyTitle:{fontSize:18,fontWeight:'800',color:colors.ink,marginTop:12},emptyHint:{fontSize:12,color:colors.muted,marginTop:6}});
