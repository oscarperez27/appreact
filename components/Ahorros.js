import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Boton from './Boton'; 

const Ahorros = ({ navigation }) => {
  const [ahorro, setAhorro] = useState(0);

  const incrementarAhorro = () => setAhorro(ahorro + 10);
  
  const resetearAhorro = () => setAhorro(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador de Ahorros: {ahorro}</Text>
      
      <View style={styles.iconsContainer}>
        <Icon name="plus" size={40} color="green" onPress={incrementarAhorro} style={styles.icon} />
        
        <Icon name="refresh" size={40} color="red" onPress={resetearAhorro} style={styles.icon} />
      </View>

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
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',  
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 30,
  }
});

export default Ahorros;
