import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



export default function Header(props) {
  return (
    <View style={styles.container}>
        <Text style = {styles.firstTitle}>{props.firstTitle}</Text>
        <Text style = {styles.secondTitle}>{props.secondTitle}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical : 20
  },

  firstTitle :{
    fontSize : 32,
    fontFamily :'bold'

  },
  secondTitle : {
    fontSize: 30,
    fontFamily :'main'

  }
});
