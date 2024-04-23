import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import SettingsScreen from './screens/SettingsScreen';
import { useCallback } from 'react';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <StatusBar style="auto" />
    </View>
  )
}
export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf')
  })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitle: '🍔 Foodr 🍔',
        headerStyle: styles.headerStyle,
        headerTintColor: '#EDF7F6',
        headerTitleStyle: styles.headerTitleStyle
      }}>
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Settings" component={SettingsScreen} />
      </Stack.Navigator >

    </NavigationContainer>

  );
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
    fontFamily: 'Times New Roman'
  },
  headerTitleStyle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 36
  }
});
