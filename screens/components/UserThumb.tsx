import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Dropdown from './Dropdown';
interface UserThumbProps {
  user: User
}
export default function UserThumb(props: UserThumbProps) {
  // const test = `../../assets/avi/${props.user.Avatar}`
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  function onPress() {
    setShowMenu(!showMenu);
  }
  return (
    <View style={styles.container} >
      <TouchableHighlight style={styles.thumb}
        onPress={onPress}
        underlayColor="transparent">
        <Image source={{ uri: props.user.Avatar }}
          style={styles.thumb}
        />
      </TouchableHighlight>
      {
        showMenu &&
        <Dropdown closeMenu={() => setShowMenu(false)} />
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible'

  },
  thumb: {
    borderRadius: 50,
    width: 40,
    height: 40,
    overflow: 'visible',
  }
})