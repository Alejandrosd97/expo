import React from 'react'
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';



import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

const cardWidth = width -100


export default function Carousel({list}) {
        const navigate = useNavigation()

  return (
    <FlatList data={list} horizontal 
        snapToInterval={width -80} decelerationRate='fast' 
        showsHorizontalScrollIndicator={false} renderItem={({item})=>{
        return ( 

            <TouchableOpacity style ={{marginLeft : 20}}
              onPress={()=>navigate.navigate('Detail', {trip: item})}  >
            <View style={styles.card}>
                
                {/* <SharedElement style ={StyleSheet.absoluteFillObject}  id={`trip.${item.id}.img`}> */}
                    <View style = {styles.imgBox}>
                        <Image style={styles.img} source ={item.img}/>
                    </View>
                {/* </SharedElement> */}

                <View style={styles.titleBox}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>)
        }}>

    </FlatList>
  )
}


const styles = StyleSheet.create({
    card : {
        width : cardWidth,
        marginTop:20,
        height : 200,
        shadowColor: 'red',
        elevation : 5,
        shadowRadius: 4,
        shadowOpacity: 1,
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    imgBox : {
        width : cardWidth,
        height : 200,
        borderRadius :20,
        overflow : 'hidden'
    },
    img :{
        width : cardWidth ,
        height : 200,
        resizeMode :'cover',

    },
    titleBox : {
        position : 'absolute',
        bottom : 20,
        left : 20,
    },
    text:{
        color :'white',
        fontSize: 20,
    fontFamily :'bold'
    }
})

