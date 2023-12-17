import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnBoarding: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
  Main: NavigatorScreenParams<MainParamList>;
};

type SignUpParamList = {
  SignUpTypes: undefined;

  FavoriteMarket: undefined;

  OwnerMarket: undefined;
  ProductionTypes: undefined;
  StoreDetail: undefined;

  MarketSelect: undefined;
  GuideSelect: undefined;
};

type MainParamList = {
  Home: undefined;
  Chat: undefined;
  MarketInfo: undefined;
  Profile: undefined;
};

type SignUpNavigationKeys = keyof SignUpParamList;

type MainNavigationKeys = keyof MainParamList;

export { SignUpParamList, MainParamList };
export { SignUpNavigationKeys, MainNavigationKeys };

// Navigation props for useNavigation
type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;

type SignUpScreenNavigationProps = NativeStackNavigationProp<SignUpParamList>;

export { RootNavigationProps, SignUpScreenNavigationProps };
