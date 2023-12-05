import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  OnBoarding: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
};

export type SignUpParamList = {
  SignUpTypes: undefined;
  CustomerSignUp: undefined;
  OwnerSignUp: undefined;
};

type OnBoardingScreenNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

type SignUpScreenNavigationProps = NativeStackNavigationProp<SignUpParamList>;

export { OnBoardingScreenNavigationProps, SignUpScreenNavigationProps };
