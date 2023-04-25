import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CongeScreen from './src/screens/CongeScreen';
import CongeRechercheScreen from './src/screens/CongeRechercheScreen';
import { StatusBar } from 'expo-status-bar';
import CongeRemplaceurScreen from './src/screens/CongeRemplaceurScreen';
import DrawerMenu from './src/navigation/DrawerNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="drawer" component={DrawerMenu} options={{ headerShown: false }} />

        {/* <Stack.Screen name="Conge" component={CongeScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="CongeRecherche" component={CongeRechercheScreen} options={{ title: 'Recherche de congé' }} /> */}
        {/* <Stack.Screen name="CongeRemplaceurScreen" component={CongeRemplaceurScreen} options={{ title: 'Conge' }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
