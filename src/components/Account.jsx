import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'

export default function Account() {
  const [loading, setLoading] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [session, setSession] = useState(null)


  

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session) 
      console.log(session)   
      
      })
      setTimeout(() => {
        getProfile() 
      }, 5000)

  }, [])

  

  async function getProfile() {
    try {
      setLoading(true)
      
      console.log(session)
        const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', session?.user.id)
        .single()
      
      console.log(data)
      console.log('aver')

      }
    
     catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
      console.log('holahhhh')
      //setFirstName(data.first_name)
      //setLastName(data.last_name)
    }
  }

  async function updateProfile({
    firstName,
    lastName,
  }) {
    try {
      setLoading(true)
       if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        'first_name' : firstName,
        'last_name' : lastName,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label="Email" value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label="First name" value={firstName} onChangeText={(text) => setFirstName(text)} />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ firstName, lastName })}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})