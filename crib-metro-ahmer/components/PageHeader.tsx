import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/theme';
export default function PageHeader({eyebrow,title,subtitle}:{eyebrow:string;title:string;subtitle:string}) {
 return <View style={styles.wrap}><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.title}>{title}</Text><Text style={styles.subtitle}>{subtitle}</Text></View>;
}
const styles=StyleSheet.create({wrap:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:2,fontWeight:'800',color:colors.coral},title:{fontSize:27,fontWeight:'900',color:colors.ink,marginTop:6},subtitle:{color:colors.muted,fontSize:13,marginTop:6,lineHeight:19}});
