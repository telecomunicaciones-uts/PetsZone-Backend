import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido al dashboard de la veterinaria PetsZone</Text>

      <Card containerStyle={styles.card}>
        <Card.Title>Gestión de Mascotas</Card.Title>
        <Card.Divider />
        <View style={styles.buttonContainer}>
          <Icon name="pets" type="material" color="#517fa4" size={50} />
          <Button
            title="Gestionar Mascotas"
            onPress={() => navigation.navigate('Mascotas')}
            color="#517fa4"
          />
        </View>
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Facturas</Card.Title>
        <Card.Divider />
        <View style={styles.buttonContainer}>
          <Icon name="receipt" type="material" color="#517fa4" size={50} />
          <Button
            title="Facturas"
            onPress={() => navigation.navigate('Facturas')}
            color="#517fa4"
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default DashboardScreen;
