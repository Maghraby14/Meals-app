import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data"
import {View , Text , StyleSheet, FlatList} from 'react-native';
import MealsList from "../components/MealsList";
function MealsOverview({route,navigation}){
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >=0 
    });
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
        title: categoryTitle
    })
    },[catId,navigation])

    
return <MealsList items={displayedMeals} />

}
export default MealsOverview;
