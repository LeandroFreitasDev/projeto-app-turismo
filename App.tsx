import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes'


interface ClimaData {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  
}

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>

  )
}