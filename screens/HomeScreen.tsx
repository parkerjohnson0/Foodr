import { View,Text,StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import UserThumb from "./components/UserThumb";
import TestData from "../TestData.json"
import { useEffect } from "react";
import { useUserStore } from "../state/UserStore";
export function HomeScreen() {
  const {user, setUser} = useUserStore();
  return (

    <View style={styles.container}>
      <Text>HomeSasdfcreen</Text>
      <StatusBar style="auto" />
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
  },
  headerStyle: {
    backgroundColor: '#FF5A5F',
  },
  headerTitleStyle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 36
  }
});