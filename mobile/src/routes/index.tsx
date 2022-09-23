import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import StackRoutes from './stack';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
