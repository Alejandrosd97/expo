import {React, useMemo} from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'
import BottomSheet from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';

const {width, height} = Dimensions.get('window');


export default function DetailCard({trip}) {
  const snap = useMemo(() => ['30%', '80%'] , [])

    return (

      <BottomSheet snapPoints={snap} 
        handleComponent={CustomHandler}
        backgroundComponent={CustomBackground}>
          <Animatable.View style = {styles.container} animation={'fadeInUp'} delay ={500}>
            <Text style={styles.text}>{trip.title}</Text>
            <Text style={styles.text}>{trip.activity}</Text>
            <Text style={styles.text}>{trip.description}</Text>
        </Animatable.View>
      </BottomSheet>
    
  )
}

const styles = StyleSheet.create({
  text : {
    fontSize: 32,
    color : 'white',
    marginLeft: 20,
    marginTop : 10,
    fontFamily :'bold'
  }
});
