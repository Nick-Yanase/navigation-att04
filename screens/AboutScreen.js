import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.titulo}>Sobre o Desenvolvedor</Animatable.Text>

      <Animatable.View animation="fadeInLeft" delay={200} style={styles.infoMe}>
        <Image source={require('../assets/Perfil-photo.png')} style={{ width: 70, height: 70 }} />
        <View style={styles.container_info}>
          <Text style={styles.infoMe_title}>Nicolas Yanase, 20 anos</Text>
          <Text style={styles.infoMe_subTitle}>(11) 95520 - 6286</Text>
        </View>
      </Animatable.View>

      <Animatable.Text animation="fadeInUp" delay={400} style={styles.text}>
        Desenvolvedor de software e designer com experiência na criação de aplicações usando tecnologias modernas como React, Node.js e MongoDB. 💻
      </Animatable.Text>
      <Text style={styles.text}>Meu foco é entender a necessidade do negócio e transformá-la em soluções práticas e eficientes, sempre aproveitando as melhores ferramentas e práticas do mercado. 🚀</Text>

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
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding:20,
    backgroundColor:'#ffffff'
  },
  titulo:{
    fontSize: 24,
    fontWeight: '600'
  },
  text: {
    fontSize: 14,
    color: '#565656',
    textAlign: 'center'
  },
  infoMe:{
    width: '100%',
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'center',
    gap:10
  },
  infoMe_title: {
    color:'#7822ce',
    fontWeight: '600'
  },
  infoMe_subTitle: {
    color:'#9469F7'
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
