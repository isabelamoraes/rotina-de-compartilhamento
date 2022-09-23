import React from 'react';
import { Container, Header, Text, Title } from './styles';

import { useNavigation } from '@react-navigation/native';
import Exemplo1SVG from '../../assets/exemplo1.svg';
import Button from '../../components/Button';

const Example1 = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Title>Exemplo 1</Title>
        <Text>
          Ao clicar no link o usuário é direcionado para uma tela do aplicativo
        </Text>
      </Header>

      <Exemplo1SVG />

      <Button text="Home" onPress={handleGoBack} icon />
    </Container>
  );
};

export default Example1;
