import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
