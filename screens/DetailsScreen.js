import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.titulo}>Detalhes</Animatable.Text>

      <Animatable.Image
        animation="zoomIn"
        delay={300}
        source={require('../assets/details.png')}
        style={{ width: 250, height: 330 }}
      />

      <Animatable.Text animation="fadeInUp" delay={500} style={styles.text}>
        Neste projeto aprofundamos sobre o conceito de navigation dentro react native, possibilitando a troca de telas dentro da aplicação. Exploramos mais sobre biblioteca <Text style={styles.text_enfase}>React Navigation</Text>
      </Animatable.Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.textoBotao}>Voltar para home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    gap: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontSize: 14,
    color: '#565656'
  },
  text_enfase: {
    fontSize: 14,
    fontWeight: '600',
    color: '#454545',
  },
  titulo:{
    fontSize: 24,
    fontWeight: '600'
  },
  botao: {
    backgroundColor: '#3e22ce',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
