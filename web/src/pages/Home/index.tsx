import React from "react";
import HomeSVG from '../../assets/home.svg';

import { Button, Container, Content, Header } from "./styles";

const Home = () => {

  const handleExample1 = () => {
    location.href = "https://rotinacompartilhamento.page.link/?link=https://rotinacompartilhamento.page.link/__/example1&apn=com.rotinacompartilhamento"
  }

  const handleExample2 = () => {
    location.href = "https://rotinacompartilhamento.page.link/?link=https://rotinacompartilhamento.page.link/__/example2?param=teste&apn=com.rotinacompartilhamento"
  }

  const handleExample3 = () => {
    location.href = "https://rotinacompartilhamento.page.link/?link=https://rotina-de-compartilhamento.web.app/__/example3&afl=https://rotina-de-compartilhamento.web.app/__/example3&ifl=https://rotina-de-compartilhamento.web.app/__/example3&apn=com.rotinacompartilhamento"
  }

  return (
    <Container>
      <img src={HomeSVG} />

      <div>
        <Header>
          <span>Rotina de Compartilhamento</span>
          <span>Dynamic Links</span>
        </Header>

        <Content>
          <Button onClick={handleExample1}>Exemplo 1</Button>
          <Button onClick={handleExample2}>Exemplo 2</Button>
          <Button onClick={handleExample3}>Exemplo 3</Button>
        </Content>
      </div>
    </Container>
  )
}

export default Home;