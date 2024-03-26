import {Image,Text,View,StyleSheet,ScrollView,Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import Mealdetail from '../components/Mealdetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

import {FavoritesContext} from '../store/context/favorites-context';
function MealDetails ({navigation,route}){
   const favContx=useContext(FavoritesContext);
    const mealid =route.params.mealid;
    const selectedmeal = MEALS.find((meal)=> meal.id === mealid);
    const mealisfavorite = favContx.ids.includes(mealid);
    function presshandle(){
       if (mealisfavorite){
            favContx.removeFavorite(mealid);
        }
        else{
            favContx.addFavorite(mealid);
        }
    }
    useLayoutEffect(()=>{
            navigation.setOptions({
                headerRight:() =>{
                    return <IconButton onPress={presshandle} icon={mealisfavorite ? 'star': 'star-outline'} color='white'/>
            }
        });
    },[navigation,presshandle]);
    return (
        <ScrollView style={{marginBottom:32}}>
            <Image source={{uri:selectedmeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedmeal.title}</Text>
            <Mealdetail 
            affordability={selectedmeal.affordability} 
            duration={selectedmeal.duration} 
            complexity={selectedmeal.complexity}
            textstyle={{color:'white'}}
            />
           <View style={styles.listoutercontainer}> 
           <View style={styles.listcontainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedmeal.ingredients}/>
            <Subtitle >Steps</Subtitle>
            <List data={selectedmeal.steps}/>
            </View>
           </View>
           
        </ScrollView>
    );
}
export default MealDetails;
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    listcontainer:{
        width:"80%"
    },
    listoutercontainer:{
        alignItems:'center'
    }


});