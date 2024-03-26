import {createContext,useState} from 'react';
export const FavoritesContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});
function FavoritesContextProvider({children}){
    const [favoriteMealIds,setMealIds] = useState([])
    function addFavorite(id){
        setMealIds((current)=>[...current,id])
    }
    function removeFavorite(id){
        setMealIds((current)=>current.filter((mealid) => mealid !== id))
    }

    const value = {
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider;