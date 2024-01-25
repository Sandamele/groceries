import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackView, createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/splash';
import Onboarding from './src/screens/onboarding';
import AuthOptions from './src/screens/authOptions';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <StatusBar hidden={true} />
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='onboarding' component={Onboarding} />
        <Stack.Screen name='authOptions' component={AuthOptions} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}