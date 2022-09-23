import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationLinking } from './linking';

import StackRoutes from './stack';

const Routes = () => {
  return (
    <NavigationContainer linking={navigationLinking}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
