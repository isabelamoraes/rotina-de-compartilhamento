import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';
import { DynamicLinksProvider } from './providers/dynamicLink';
import Routes from './routes';
import theme from './styles/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <DynamicLinksProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </ThemeProvider>
    </DynamicLinksProvider>
  );
};

export default App;
