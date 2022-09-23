import React from 'react';
import { Container, Icon, Text } from './styles';

import HouseIconSVG from '../../assets/house.svg';

type Props = {
  text: string;
  onPress: () => void;
  icon?: boolean;
};

const Button = ({ text, onPress, icon = false }: Props) => {
  return (
    <Container onPress={onPress}>
      {icon && (
        <Icon>
          <HouseIconSVG />
        </Icon>
      )}
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
