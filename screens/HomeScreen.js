import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.titulo}>
        Projeto navigation
      </Animatable.Text>

      <Animatable.Text animation="fadeIn" delay={300} style={styles.text}>
        Neste projeto utilizo a biblioteca <Text style={styles.text_enfase}>React Navigation</Text> para navegação de telas
      </Animatable.Text>

      <Animatable.Image
        animation="zoomIn"
        delay={600}
        source={require('../assets/banner-navigation.png')}
        style={{ width: 300, height: 170 }}
      />

      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('About')}>
          <MaterialIcons name="person" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Details')}>
          <MaterialIcons name="info" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding:20,
    backgroundColor:'#ffffff'
  },
  text: {
    fontSize: 14,
    color: '#565656',
    textAlign: 'center'
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
  btn_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
