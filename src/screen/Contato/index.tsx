import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.descricao}>
      Disque Turismo pelo telefone 0800-450-7070 
      </Text>
    </View>
  )
}