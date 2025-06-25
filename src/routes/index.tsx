import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import Contato from '../screen/Contato';
import Sobre from '../screen/Sobre';


const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Turismo" component={Home} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
