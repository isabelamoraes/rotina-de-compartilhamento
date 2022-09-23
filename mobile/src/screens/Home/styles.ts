import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: space-evenly;
  padding-top: 32px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.big}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Options = styled.View``;
