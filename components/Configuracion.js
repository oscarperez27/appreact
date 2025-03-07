import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Boton from './Boton'; 

const Configuracion = ({ navigation }) => {
  const mostrarAlerta = (opcion) => {
    Alert.alert(`Configuración seleccionada: ${opcion}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Icon
          name="paint-brush"
          size={40}
          color="blue"
          onPress={() => mostrarAlerta('Cambiar tema')}
          style={styles.icon}
        />
        <Icon
          name="language"
          size={40}
          color="purple"
          onPress={() => mostrarAlerta('Cambiar idioma')}
          style={styles.icon}
        />
        <Icon
          name="bell"
          size={40}
          color="orange"
          onPress={() => mostrarAlerta('Configurar notificaciones')}
          style={styles.icon}
        />
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

export default Configuracion;
