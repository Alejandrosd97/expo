import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import DetailCard from './DetailCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window');


export default function Detail({route}) {
      const {params} = route
      const {trip} = params
      const navigate = useNavigation()

    return (

    

    <View style = {styles.container}>
      <StatusBar  barStyle ='white' /> 
      <View style = {styles.back}>
        <Ionicons 
          style = {styles.arrow} 
          name="arrow-back" size={24} 
          color="black"
          onPress={()=>navigate.goBack()} />
      </View>
       
      <View style = {styles.imgBox}>
          <Image style={styles.img} source = {trip.img}/>
      </View>
      <DetailCard trip={trip}/>
    </View>
  
  )
}


// Detail.sharedElements= (route)=>{
//     const {trip} = route.params 
//     console.log(trip)
//     return [
//         {
//             id : `trip.${trip.id}.img`
//         }
//     ]
// }

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  imgBox : {
    overflow :'hidden'
  },
  img : {
    resizeMode :'cover',
    width: width,
    height :height + 30
  },
  back: {
    position : 'absolute',
    top: 40,
    left : 20,
    zIndex : 1
  },
  arrow : {
    color :'white'
  }
});
