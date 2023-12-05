import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpTypesScreen from "@screens/SignUpTypesScreen";
import React from "react";
import { SignUpParamList } from "./types";

const SignUpStack = createNativeStackNavigator<SignUpParamList>();

const SignUpRoutes = () => {
  return (
    <SignUpStack.Navigator
      initialRouteName="SignUpTypes"
      screenOptions={{ headerShown: false }}
    >
      <SignUpStack.Screen name="SignUpTypes" component={SignUpTypesScreen} />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoutes;
