import {View , Text, Pressable,Image,StyleSheet,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Mealdetail from './Mealdetail';
function MealItem({title,imgurl,duration,complexity,affordability,id}){
    const  navigation = useNavigation();
    function onPress(){
        navigation.navigate('Meals Details',{
            mealid:id
        })
    }
    return (
        <View style={styles.mealitem}>
            <Pressable
            android_ripple={{color:"#cccccc"}} 
            style={({pressed}) => pressed ? styles.btnPressed :null}
            onPress={onPress}
            >
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imgurl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Mealdetail duration={duration}  complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}
export default MealItem;
const styles = StyleSheet.create({
    mealitem:{
        margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.35,
        shadowOffset:{width:0, height:2},
        shadowRadius:16,
        overflow: Platform.OS === 'android' ? 'hidden' : "visible" ,
        
        
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    
    innerContainer:{
        borderRadius:8,
        overflow: 'hidden',
    },
    btnPressed:{
        opacity:0.5
    },


});