import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { MainNavigator } from './src/components/MainNavigator';

import 'react-native-url-polyfill/auto'




import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <MainNavigator />

    </>
  )
}

