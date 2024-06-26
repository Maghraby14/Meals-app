import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDeatails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
import {Ionicons} from'@expo/vector-icons';

import FavoritesContextProvider from './store/context/favorites-context';
const Stack =createNativeStackNavigator();
const Drawer =createDrawerNavigator();
function DrawerNavigator(){
  return(
    <Drawer.Navigator 
    screenOptions={
      {
        headerStyle:{backgroundColor: '#351401'},
        headerTintColor:'white',
        sceneContainerStyle:{backgroundColor:"#3f2f25"},
        drawerContentStyle:{backgroundColor:'#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor:'#e4baa1'
      }
    }>
      <Drawer.Screen name='Categories' component={CategoriesScreen} 
      options={{
        drawerIcon:({color,size}) =>(
          <Ionicons name='list' color={color} size={size} />

        ),
      }}
      />
      <Drawer.Screen name='Favorites' component={Favorites} 
      options={{
        drawerIcon:({color,size}) =>(
          <Ionicons name='star' color={color} size={size} />

        ),
      }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <FavoritesContextProvider >
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={
      {
        headerStyle:{backgroundColor: '#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:"#3f2f25"}
      }
    }
    >
      <Stack.Screen name='Meals Categories' component={DrawerNavigator } options={{ 
        //title:'All Categories',
        headerShown:false,
      }}/>
      <Stack.Screen name='Meals Overview' component={MealsOverview }/>
      <Stack.Screen name='Meals Details' component={MealDetails }
      
      />
    </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
