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
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 340px;
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 32px;
`;

export const ParamContainer = styled.View`
  background: ${({ theme }) => theme.colors.gray};
  width: 286px;
  padding: 8px;
  border-radius: 8px;
  align-items: center;
`;

export const Param = styled.Text<{ isEmpty: boolean }>`
  font-family: ${({ theme, isEmpty }) =>
    isEmpty ? theme.fonts.regular : theme.fonts.bold};
  font-size: ${({ theme, isEmpty }) =>
    isEmpty ? theme.sizes.md : theme.sizes.lg}px;
  color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.text : theme.colors.primary};
`;
