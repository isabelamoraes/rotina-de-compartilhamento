import React from 'react';
import { Container, Header, Options, Text, Title } from './styles';

import { useNavigation } from '@react-navigation/native';
import HomeSVG from '../../assets/home.svg';
import Button from '../../components/Button';
import { NavigationProps } from '../../routes/types';

const Home = () => {
  const navigation: NavigationProps = useNavigation();

  const handleExample1 = () => {
    navigation.navigate('Example1');
  };

  const handleExample2 = () => {
    navigation.navigate('Example2');
  };

  return (
    <Container>
      <Header>
        <Text>Rotina de Compartilhamento</Text>
        <Title>Dynamic Links</Title>
      </Header>

      <HomeSVG />

      <Options>
        <Button text="Exemplo 1" onPress={handleExample1} />
        <Button text="Exemplo 2" onPress={handleExample2} />
      </Options>
    </Container>
  );
};

export default Home;
