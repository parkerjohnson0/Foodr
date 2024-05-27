import React from 'react'
import { Image,StyleSheet, View,Text } from 'react-native'
interface UserThumbProps{
  user: User
}
export default function UserThumb(props: UserThumbProps) {
  return (
    <View style={styles.container}>
      <Image source={require(`../../assets/avi/${props.user.Avatar}`)}
      style={styles.thumb}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      width: 80,
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    },
    thumb: {
      borderRadius:50,
      width:40,
      height:40,

    }
})