import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import ResultCard from './ResultCard'




export default function ResultsList({list}) {
  const {width} = Dimensions.get('window');
  const cardWidth = width /2 -15

  return (
      <ScrollView>
        <View style={styles.container}>
          <View style ={{marginRight : 10}}>
            {list.filter((_, i)=>i %2 === 0 ).map((trip)=>{
              return <ResultCard trip={trip} width={cardWidth} key ={trip.id}/>
            })}
          </View>
          <View>
            {list.filter((_, i)=>i %2 !== 0 ).map((trip)=>{
              return <ResultCard trip={trip} width={cardWidth} key ={trip.id}/>
            })}
          </View>
        </View>

      </ScrollView>

  )
}



const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginHorizontal :10,
        marginBottom : 100
    },
});



