import React, { CSSProperties, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
interface TextInputWrapperProps{
  activeBorderColor?: string,
  placeholder?: string,
  secureTextEntry?: boolean 
}

export default function TextInputWrapper(props: TextInputWrapperProps) {
  const [isFocused, setIsFocused] = useState<Boolean>();
  return (
      <TextInput onFocus={()=> setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
         style={[
        styles.input, isFocused && {
          borderColor: props.activeBorderColor
      }]}/>
  )
}
const styles = StyleSheet.create({
 input:{
    borderWidth: 2,
    width: 160,
    height:35,
    padding:10,
    margin: 10,
    borderRadius: 15,
    borderColor: '#000000'
 },
 })
