import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window');

const cardWidth = width / 2 - 40
    
    


export default function Tripslist({list}) {
    const navigate = useNavigation()


    const trips = list.map((trip, index)=>{
        return (
        
            <TouchableOpacity key={trip.id} 
              style = {styles.cardContainer} 
              onPress={()=>navigate.navigate('Detail', {trip: trip})}>
                <View style={styles.carta} >
                    <View style = {styles.imgBox} >
                        <Image style={styles.image} source={trip.img}/>
                    </View>
                 
                    <Text style={styles.title}>{trip.title}</Text>
                </View>
            </TouchableOpacity>
        )
    })

  return (
    <View style = {styles.container}>
        {trips}
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection :'row',
        flexWrap : 'wrap',
        marginBottom:160
    },
  
    carta : {
        width: cardWidth,
        borderRadius: 20,
        backgroundColor:'#faf3dd',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
  },

  cardContainer : {
    marginLeft: 20,
    marginTop: 30
    
  },

  imgBox:  {
    width :cardWidth,
    height:160,
    overflow : 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius :20
  },
  image: {
    width :cardWidth,
    height:160
  },

  title :{
    fontSize: 16,
    fontFamily :'bold',
    marginVertical: 10,
    color :'#5e6472',
    marginHorizontal:16
  }
});
