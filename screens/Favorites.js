import {Text ,StyleSheet,View} from 'react-native';
import MealsList from '../components/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
function Favorites(){
    const favContx=useContext(FavoritesContext);
    const favMeals=MEALS.filter(meal => favContx.ids.includes(meal.id));
    if(favMeals.length === 0){ 
        return <View style={styles.root}>
            <Text style={styles.text}>
                You have no Favorite meals yet
            </Text>
        </View>
    }
    return <MealsList items={favMeals}/>
}
export default Favorites;
const styles = StyleSheet.create({
root:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
text:{
    fontSize:18,
    fontWeight: 'bold',
    color:'white'
}
});