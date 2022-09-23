import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 220px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;

export const Icon = styled.View`
  margin-right: 16px;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme }) => theme.colors.primary};
`;
