import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import MascotasScreen from './src/screens/MascotasScreen';
import CreateInvoiceScreen from './src/screens/CreateInvoiceScreen'; 
import ManagePetsScreen from './src/screens/ManagePetsScreen'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Mascotas" component={MascotasScreen} />
        <Stack.Screen name="Facturas" component={CreateInvoiceScreen} />
        <Stack.Screen name="ManagePetsScreen" component={ManagePetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
