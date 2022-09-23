import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.sizes.lg}rem;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`
