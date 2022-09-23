import React from "react";

import ExampleSVG from '../../assets/example.svg';

import { Container, Content } from "./styles";

const Example = () => {
  return (
    <Container>
      <img src={ExampleSVG} />

      <Content>
        <span>Exemplo 3</span>
        <span>Quando o usuário não tiver o app instalado e clicar no link, ele será direcionado para a URL informada</span>
      </Content>
    </Container>
  )
}

export default Example;