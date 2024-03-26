import { FlatList } from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function presshandle(){
            navigation.navigate('Meals Overview',{
                categoryId:itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} 
        color={itemData.item.color}
        onPress={presshandle}
        />;
    }
    return(
        <FlatList 
        data={CATEGORIES}
        keyExtractor={(item)=> item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    );
}
export default CategoriesScreen;