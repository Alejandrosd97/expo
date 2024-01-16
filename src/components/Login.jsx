import React, { useState } from 'react'
import { Alert, StyleSheet, View, TouchableOpacity,Text } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigation()


  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
     else {
      setLoading(false)
      navigate.navigate('Main')
    }
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    else {
      setLoading(false)
      //console.log(session)
      navigate.navigate('Main')
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          style ={styles.color}
          placeholder="email"
          placeholderTextColor = 'whitesmoke'
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => signInWithEmail()}>
          <Text style ={styles.button}>
            SignIn
          </Text>
          </TouchableOpacity>
        <TouchableOpacity  onPress={() => signUpWithEmail()}>
          <Text style ={styles.button}>
            SignUp
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },

  button : {
     backgroundColor : '#faf3dd',
    textAlign : 'center',
    fontFamily : 'bold',
    letterSpacing : 1,
    marginTop : 20,
    color :'#5e6472',
    paddingVertical:16,
    fontSize :24,
    borderRadius : 10
  },

  mt20: {
    marginTop: 20,
  },

  color :{
    color : 'white',
  }
})