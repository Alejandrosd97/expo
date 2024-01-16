import {React, createContext} from 'react'
import Main from './Main'
import Register from './Register'

import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import Detail from './Detail';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useFonts } from 'expo-font';




const Stack = createSharedElementStackNavigator()


 
export function MainNavigator({session}) {

  const FontsContext = createContext(null);
  const [loaded] = useFonts({
    main : require('../../assets/fonts/BarlowCondensed-Medium.ttf'),
    bold : require('../../assets/fonts/BarlowCondensed-Bold.ttf') 
  })


  return (
    <NavigationContainer>
      <FontsContext.Provider value={loaded}>
      <Stack.Navigator  screenOptions={{
            headerShown: false
          }} >   
        <Stack.Screen name={'Root'} component ={Main}/>
        <Stack.Screen session ={session} name={'Main'} component={TabNavigator}/>
       
        <Stack.Screen name ={'Detail'} component={Detail}/>
        <Stack.Screen name ={'EditProfile'} component={Detail}/>
      </Stack.Navigator>
      </FontsContext.Provider>
    </NavigationContainer>
  );
}