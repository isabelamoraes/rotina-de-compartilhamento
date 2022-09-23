import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Example1 from '../screens/Example1';
import Example2 from '../screens/Example2';
import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Example1" component={Example1} />
      <Screen name="Example2" component={Example2} />
    </Navigator>
  );
};

export default StackRoutes;
