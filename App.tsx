import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import SettingsScreen from './screens/SettingsScreen';
import { useCallback } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import UserThumb from './screens/components/UserThumb';
import { useUserStore } from './state/UserStore';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const {user} = useUserStore();
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf')
  })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitle: '🍔 Foodr 🍔',
        headerStyle: styles.headerStyle,
        headerTintColor: '#EDF7F6',
        headerTitleStyle: styles.headerTitleStyle,
        headerRight: () =>{
          return <UserThumb user={user!}/>
        }

      }}>
        {
          user ?
          <>
            <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Settings" component={SettingsScreen} />
          </>
          :
          <Stack.Screen options={{headerTitleAlign: 'center'}} name="Login" component={LoginScreen}/>
        }
      </Stack.Navigator >

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FF5A5F',
  },
  headerTitleStyle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 36,
  }
});
