import React from 'react'
import Constants from 'expo-constants'
import Header from './Header'
import Title from './Title'
import data from './data/repos.js'
import longData from './data/viajes.js'



import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Carousel from './Carousel'
import Tripslist from './TripsList'




export default function Popular () {

  return (
         <View style = {styles.container}>
            <Header headerTitle = 'Popular'/>
            <Title firstTitle = 'Find your' secondTitle='dream trip'/>
            <ScrollView showsVerticalScrollIndicator= {false}>
                <Carousel list={data}/>
                <View>
                    <Tripslist list={longData}/>
                </View>
            </ScrollView>


            
        </View>
  );
}


const styles = StyleSheet.create({
    container : {
        marginTop : Constants.statusBarHeight, 
        padding: 10, 
        paddingTop : 20,
        backgroungColor : 'blue'
    },

    img : {
        width : '100%',
        height : 300,
        borderRadius : 3
    }
})
