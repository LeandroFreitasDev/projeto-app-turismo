import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
      <Text style={styles.descricao}>
        Petrópolis, conhecida como a “Cidade Imperial”, encanta visitantes com seu charme histórico,
        arquitetura preservada e belas paisagens serranas. Oferece museus, palácios, trilhas e uma
        rica cultura, sendo um destino perfeito para quem busca história, natureza e tranquilidade.
      </Text>
    </View>
  )
}