import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CreatePetScreen = () => {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [edad, setEdad] = useState('');

  const handleCreatePet = async () => {
    try {
      const response = await axios.post('http://192.168.199.147/vetmascotas/crear_mascota.php', {
        nombre,
        especie,
        edad,
      });

      if (response.data.success) {
        Alert.alert('Éxito', 'Mascota registrada correctamente');
        setNombre('');
        setEspecie('');
        setEdad('');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al registrar la mascota: ' + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Registrar Mascota</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Especie"
        value={especie}
        onChangeText={setEspecie}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Registrar Mascota" onPress={handleCreatePet} />
    </View>
  );
};

export default CreatePetScreen;
