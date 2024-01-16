import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Popular from './Popular'
import SearchPage from './SearchPage'
import Profile from './Profile'
import Account from './Account'
import { Octicons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()


export default function TabNavigator() {
  return (
     <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel : false,
          tabBarActiveColor : 'red',
          tabBarInactiveColor :'grey'
        }}>
        <Tab.Screen 
          name={'Popular'} 
          component = {Popular}
          options = {
            {tabBarIcon : ({focused})=> <Octicons  name="home" size={24} color= {focused ? "black" : 'grey'} /> }
          }/>
        <Tab.Screen 
          name={'Search'} 
          component = {SearchPage}
          options = {
            {tabBarIcon : ({focused})=> <Octicons name="search" size={24} color= {focused ? "black" : 'grey'} /> }
          }/>
        <Tab.Screen 
          name={'Profile'} 
          component = {Profile}
          options = {
            {tabBarIcon : ({focused})=> <FontAwesome5 name="user" size={24} color= {focused ? "black" : 'grey'} /> }
          }
          />


      </Tab.Navigator>
  )
}
