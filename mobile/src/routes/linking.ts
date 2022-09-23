import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const navigationLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    'rotinacompartilhamento://rotinacompartilhamento',
    'https://rotinacompartilhamento.page.link',
  ],
  config: {
    screens: {
      Example1: 'example1',
      Example2: 'example2',
    },
  },
};
