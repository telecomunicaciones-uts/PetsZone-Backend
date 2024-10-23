import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Icon, Card } from 'react-native-elements';

const MascotasScreen = () => {
  const [mascotas, setMascotas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://192.168.199.147/vetmascotas/mascotas.php')
      .then(response => setMascotas(response.data))
      .catch(error => console.error('Error al cargar mascotas:', error));
  }, []);

  const handleSearch = () => {
    axios.post('http://192.168.199.147/vetmascotas/buscar_mascota.php', { search })
      .then(response => setMascotas(response.data))
      .catch(error => console.error('Error al buscar mascota:', error));
  };

  const renderMascota = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Icon name="pets" type="material" color="#517fa4" size={40} />
        <Text style={styles.mascotaText}>{item.nombre}</Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar mascota"
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>

      <FlatList
        data={mascotas}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMascota}
        ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron mascotas</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#517fa4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mascotaText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default MascotasScreen;
