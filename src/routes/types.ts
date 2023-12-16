import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnBoarding: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
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

type SignUpNavigationKeys = keyof SignUpParamList;

export { SignUpNavigationKeys, SignUpParamList };

// Navigation props for useNavigation
type OnBoardingScreenNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

type SignUpScreenNavigationProps = NativeStackNavigationProp<SignUpParamList>;

export { OnBoardingScreenNavigationProps, SignUpScreenNavigationProps };
