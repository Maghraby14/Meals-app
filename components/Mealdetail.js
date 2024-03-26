import { View,Text,StyleSheet } from "react-native";
function Mealdetail({duration,complexity,affordability,style,textstyle}){
return (<View style={[styles.detalis,style]}>
    <Text style={[styles.detailitem,textstyle]}>{duration}m</Text>
    <Text style={[styles.detailitem,textstyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailitem,textstyle]}>{affordability.toUpperCase()}</Text>
</View>);

}
export default Mealdetail;
const styles = StyleSheet.create({
    detalis:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent: 'center',
    },
    detailitem:{
        marginHorizontal:4,
        fontSize:12
    },
});