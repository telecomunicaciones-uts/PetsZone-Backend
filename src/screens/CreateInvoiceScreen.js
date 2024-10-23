import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CreateInvoiceScreen = () => {
  const [cliente, setCliente] = useState('');
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post('http://192.168.199.147/vetmascotas/crear_factura.php', {
        cliente,
        monto,
        descripcion,
      });

      if (response.data.success) {
        Alert.alert('Éxito', 'Factura creada correctamente');
        setCliente('');
        setMonto('');
        setDescripcion('');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al crear la factura: ' + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Crear Factura</Text>
      <TextInput
        placeholder="Cliente"
        value={cliente}
        onChangeText={setCliente}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Monto"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Crear Factura" onPress={handleCreateInvoice} />
    </View>
  );
};

export default CreateInvoiceScreen;
