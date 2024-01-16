import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function SearchInput() {
  return (
    <View>
        <TextInput style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    borderRadius :10,
    backgroundColor : 'white' ,
    marginTop : 20,
    height:50,
    marginHorizontal:20,
    paddingHorizontal :20,
    shadowColor: 'grey',
        elevation : 5,
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
        width: 0,
        height: 2,
        }
  }
});
