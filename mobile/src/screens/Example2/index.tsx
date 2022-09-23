import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import Exemplo2SVG from '../../assets/exemplo2.svg';
import Button from '../../components/Button';
import { Example2RouteProps } from '../../routes/types';

import {
  Container,
  Content,
  Header,
  Label,
  Param,
  ParamContainer,
  Text,
  Title,
} from './styles';

const Example2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as Example2RouteProps;
  const isEmpty = params === undefined;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Title>Exemplo 2</Title>
        <Text>
          Ao clicar no link com parâmetro o usuário é direcionado para uma tela
          do aplicativo que recebe esse parâmetroo
        </Text>
      </Header>

      <Content>
        <Exemplo2SVG />
        <Label>Parâmetro recebido:</Label>
        <ParamContainer>
          <Param isEmpty={isEmpty}>
            {isEmpty ? 'Nenhum parâmetro recebido' : params?.param}
          </Param>
        </ParamContainer>
      </Content>

      <Button text="Home" onPress={handleGoBack} icon />
    </Container>
  );
};

export default Example2;
