import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



export default function Header(props) {
  return (
    <View>
        <Text style = {styles.title}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize : 24,
    fontWeight:'bold',
    color : '#5e6472'
  },
});
