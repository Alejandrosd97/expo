import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eywtyedurywetrajjhxw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5d3R5ZWR1cnl3ZXRyYWpqaHh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzg4NzUsImV4cCI6MjAxNTcxNDg3NX0.DQz0GRXeLCHbwMSdQ-TZqhw6wAH8KJyG0YznBP0LJFI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})