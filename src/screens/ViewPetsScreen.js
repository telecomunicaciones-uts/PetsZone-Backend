import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ViewPetsScreen = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://192.168.149.147/vetmascotas/get_mascotas.php');
      setPets(response.data);
    } catch (error) {
      console.error('Error al obtener las mascotas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const renderPet = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Nombre: {item.nombre}</Text>
      <Text>Especie: {item.especie}</Text>
      <Text>Edad: {item.edad}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Mascotas Registradas</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={pets}
          renderItem={renderPet}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default ViewPetsScreen;
