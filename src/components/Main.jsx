import {React, useContext} from 'react'

import { StyleSheet, Pressable, Button, Text, View, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import playa from '../../assets/playasepia.jpg'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login from './Login'


export default function Main() {
  const navigate = useNavigation()

   const [loaded] = useFonts({
    main : require('../../assets/fonts/BarlowCondensed-Medium.ttf'),
    bold : require('../../assets/fonts/BarlowCondensed-Bold.ttf') 
  })

  if(!loaded){
    return null
  }

  return (
    
    <View style={styles.container}>
    <ImageBackground source={playa} resizeMode="cover" style={styles.image}>
      <View style={styles.mainTitle}>
        <Text style={styles.firstitle}>Dream</Text>
        <Text style={styles.secondTitle}>Destiny</Text>
      </View>
      <View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            In DreamDestiny, we help you find and create your dream destination, where every journey is an opportunity to fulfill your dreams
          </Text>
          <Login/>
       </View>

      </View>
      
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  mainTitle: {
    marginTop:130,
    marginLeft : 20,
    flex: 1,
    textAlign: 'center',
  },

  firstitle :{
    fontSize :44,
    color : '#faf3dd',
    fontFamily :'main'
  },

  secondTitle :{
    fontSize : 52,
    marginTop : -20,
    color: '#faf3dd',
    fontFamily : 'bold'

  },

  description : {
    padding: 20,
    marginTop : 40,
    backgroundColor : 'rgba(94, 100, 114, 0.5)',
  },

  descriptionText : {
    color :'white',
    fontSize : 18,
    fontFamily : 'main',
    color: '#faf3dd',

  },

  button : {
    backgroundColor : '#faf3dd',
    textAlign : 'center',
    fontFamily : 'bold',
    letterSpacing : 1,
    marginTop : 20,
    color :'#5e6472',
    paddingVertical:16,
    fontSize :24,
    borderRadius : 10


  }
});