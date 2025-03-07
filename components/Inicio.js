import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Pantalla de Inicio </Text>
      <Button
        title="Ir a Ahorros"
        onPress={() => navigation.navigate('Ahorros')}  
      />
      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Perfil')}  
      />
      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Configuracion')}  
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Inicio;  
