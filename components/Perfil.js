import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Boton from './Boton'; 

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require( '../assets/pancho.jpg' )} style={styles.image} />
      <Text style={styles.text}> Nombre: pancho </Text>
      <Text style={styles.text}> Correo: pancho@gmail.com </Text>
      <Boton navigation={navigation} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Perfil;
