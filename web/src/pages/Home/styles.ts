import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: flex;  
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 1080px){
    flex-direction: column;

    img {
      width: 280px;
      margin-bottom: 2rem
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary}
  }

  span:nth-child(2) {
    font-size: ${({ theme }) => theme.sizes.big}rem;
    font-weight: 700
  }

  @media (max-width: 1080px){
    span:nth-child(2) {
      font-size: ${({ theme }) => theme.sizes.xxl}rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Button = styled.button`
  width: 17.5rem;
  padding: 1rem;
  border-radius: 1rem;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  outlined: none;
  
  :hover {
    background: ${({ theme }) => theme.colors.secondary};
    transition: .2s;
    cursor: pointer
  }

  :disabled {
    background: ${({ theme }) => theme.colors.gray};
    border: none;
  }
`
