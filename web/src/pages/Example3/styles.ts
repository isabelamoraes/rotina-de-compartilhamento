import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: flex;  
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;

  @media (max-width: 1080px){
    flex-direction: column;
    padding: 0;

    img {
      width: 280px;
      margin-bottom: 2rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.text};
    max-width: 300px;
    text-align: center;
  }

  span:nth-child(1) {
    font-size: ${({ theme }) => theme.sizes.xxl}rem;
    font-weight: 700
  }
`
