import React from "react";

import HomeSVG from '../../assets/home.svg';

import { Button, Container, Content, Header } from "./styles";

const Home = () => {
  return (
    <Container>
      <img src={HomeSVG} />

      <div>
        <Header>
          <span>Rotina de Compartilhamento</span>
          <span>Dynamic Links</span>
        </Header>

        <Content>
          <Button>Exemplo 1</Button>
          <Button>Exemplo 2</Button>
          <Button>Exemplo 3</Button>
        </Content>
      </div>
    </Container>
  )
}

export default Home;