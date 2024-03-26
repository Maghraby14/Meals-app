import MealItem from "./MealItem";

import { View,StyleSheet,FlatList } from "react-native";

function MealsList ({items}) {
    function renderMealitem(itemData){
        const item = itemData.item;
        
        const mealItemProps ={
            title:item.title,
            imgurl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
            id:item.id,
    
        }
        return <MealItem {...mealItemProps} />;
    }
    return(
        <View style={styles.container}> 
            <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealitem}
            />
        </View>
        
    );
    
    
}




export default MealsList;











const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
    },
});