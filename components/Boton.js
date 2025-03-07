import React from 'react';
import { Button } from 'react-native';

const Boton = ({ navigation }) => {
  const regresar = () => {
    navigation.goBack();
  };

  return (
    <Button title="Regresar" onPress={regresar} />
  );
};

export default Boton;
