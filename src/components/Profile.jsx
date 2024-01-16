import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import playa from '../../assets/playasepia.jpg'
import Constants from 'expo-constants'
import { useNavigation } from 'react-router-native';
import Account from './Account'
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';





export default function Profile(props) {
  return (
    <>
    <View style = {styles.white}>
      <Header headerTitle = 'Profile'/>
    </View>
    <View style={styles.container}>
      <View style={styles.imgBox}>
       <Image style={styles.img} source= {playa}/>
      </View>
      {/* <View style={styles.row}>
        <MaterialCommunityIcons name="account-outline" size={24} color="white" />
        <Text style={styles.text}>Alejandro Santamaria</Text>
      </View>
      <View style={styles.row}> 
        <MaterialCommunityIcons name="cellphone" size={24} color="white" />
        <Text style={styles.text}>+34 555 555 555</Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons name="email-outline" size={24} color="white" />
        <Text style={styles.text}>alex.santamaria97@gmail.com</Text>
      </View>
        <TouchableOpacity>
        <Text style = {styles.edit}>Edit profile</Text> 
        </TouchableOpacity> */}
       
      <Account/>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex : 5,
    backgroundColor : '#5e6472'
  },
  white :{
    flex:1,
    paddingTop : 20,
    marginTop : Constants.statusBarHeight, 
    alignItems :'center',
  },

  title :{
    marginTop : 30,
    fontSize :20
  },

  imgBox : {
    width: 150,
    height : 150,
    marginTop : -70,
    marginBottom : 30,
    backgroundColor :'whitesmoke',
    padding : 5,
    borderRadius : 100

  },

  img :{
    borderRadius : 100,
    width: 140,
    height : 140,
    resizeMode : 'cover'
  },
  edit : {
    padding : 20,
    backgroundColor : '#faf3dd',
    borderRadius : 10,
    fontWeight : 'bold',
    fontSize : 16,
    letterSpacing :1,
    color : '#5e6472',
    marginTop : 20,
    width : 130
  },

  text : {
    color : 'white',
    fontSize : 20,
    marginVertical : 10,
    marginLeft : 10
  },
  row :{
    flexDirection : 'row',
    alignItems : 'center',
  }
});
