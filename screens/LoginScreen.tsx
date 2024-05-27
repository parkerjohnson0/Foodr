import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import TextInputWrapper from './components/inputs/TextInputWrapper'
import LoginButton from './components/buttons/LoginButton'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
    <TextInputWrapper placeholder={"Username or email"} activeBorderColor='#FF5A5F'/> 
    <TextInputWrapper secureTextEntry={true} placeholder={"Password"} activeBorderColor='#FF5A5F'/> 
    <StatusBar style="auto" />
    <LoginButton/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
 }
 })
