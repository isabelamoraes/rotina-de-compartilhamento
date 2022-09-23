import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type Example2RouteProps = {
  param?: string;
};

export type RootStackParamList = {
  Home: undefined;
  Example1: undefined;
  Example2: Example2RouteProps | undefined;
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
